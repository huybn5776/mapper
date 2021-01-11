import type {
  CreateMapOptions,
  CreateMapperOptions,
  Mapper,
  MappingProfile,
} from '@automapper/types';
import { mapArray, mapMutate, mapReturn } from '../map';
import { createMapFluentFunction } from './create-map-fluent-function.util';

/**
 * Method to create a Mapper with a plugin
 *
 * @param {CreateMapperOptions} createMapperOptions - options for createMapper
 */
export function createMapper<TKey = unknown>({
  name,
  pluginInitializer,
  namingConventions,
  errorHandler: customErrorHandler,
}: CreateMapperOptions<TKey>): Mapper<TKey> {
  // default errorHandler to console.error
  const errorHandler = customErrorHandler || { handle: console.error };

  // get the plugin
  const plugin = pluginInitializer(errorHandler);

  return {
    name,
    createMap(source, destination, options: CreateMapOptions = {}) {
      // if namingConventions isn't passed in for this Mapping pair, use the global ones
      if (options && !options.namingConventions) {
        options.namingConventions = namingConventions;
      }

      // create the initial mapping between source and destination
      const mapping = plugin.initializeMapping(source, destination, options);

      // return the FluentFunction for chaining
      return createMapFluentFunction(mapping);
    },
    getMapping: plugin.getMapping.bind(plugin),
    addProfile(profile: MappingProfile) {
      profile(this);
      return this;
    },
    map(sourceObj, destination, source, destinationObjOrOptions?, options?) {
      const { preMap } = plugin;

      // run preMap if available
      const [sourceInstance] = preMap?.(source, destination, sourceObj) ?? [];

      // get mapping between Source and Destination
      const mapping = this.getMapping(source, destination);

      // check mutate or return

      // if destinationObjOrOptions has beforeMap or afterMap
      // or destinationObjOrOptions is null/undefined => this is a mapReturn
      // TODO(chau): this might fail if destinationObj has a beforeMap/afterMap property on the consumer side.
      if (
        (destinationObjOrOptions &&
          ('beforeMap' in destinationObjOrOptions ||
            'afterMap' in destinationObjOrOptions)) ||
        destinationObjOrOptions == null
      ) {
        return mapReturn(
          sourceInstance ?? sourceObj,
          mapping,
          destinationObjOrOptions,
          this,
          errorHandler
        );
      }

      mapMutate(
        sourceInstance ?? sourceObj,
        mapping,
        options,
        this,
        errorHandler,
        destinationObjOrOptions
      );
    },
    mapAsync(
      sourceObj,
      destination,
      source,
      destinationObjOrOptions,
      options?
    ) {
      return Promise.resolve(
        this.map(
          sourceObj,
          destination,
          source,
          destinationObjOrOptions,
          options
        )
      );
    },
    mapArray(sourceArr, destination, source, options) {
      return mapArray(
        sourceArr,
        destination,
        source,
        options,
        this,
        errorHandler
      );
    },
    mapArrayAsync(sourceArr, destination, source, options) {
      return Promise.resolve(
        this.mapArray(sourceArr, destination, source, options)
      );
    },
    dispose() {
      plugin.dispose?.();
    },
  };
}