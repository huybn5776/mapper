import type {
  Converter,
  CreateMapOptions,
  CreateMapperOptions,
  MapArrayOptions,
  MapOptions,
  Mapper,
  Mapping,
  PrimitiveConstructorWithDate,
  ValueSelector,
} from '@automapper/types';
import { mapArray, mapMutate, mapReturn } from '../map';
import { createMapFluentFunction } from './create-map-fluent-function.util';
import { mappingNullCheck } from '../utils';
import { applyTypeConverters } from './apply-type-converters.util';

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
}: CreateMapperOptions<TKey>): Mapper {
  // default errorHandler to console.error
  const errorHandler = customErrorHandler || { handle: console.error };

  // get the plugin
  const plugin = pluginInitializer(errorHandler);

  // type converters
  const typeConverters = new WeakMap<
    PrimitiveConstructorWithDate,
    WeakMap<PrimitiveConstructorWithDate, ValueSelector | Converter>
  >();

  return {
    name,
    addTypeConverter(source, destination, converter) {
      const sourceTypeConverters = typeConverters.get(source);
      if (sourceTypeConverters) {
        sourceTypeConverters.set(destination, converter);
        return this;
      }

      typeConverters.set(
        source,
        new WeakMap<PrimitiveConstructorWithDate, ValueSelector | Converter>([
          [destination, converter],
        ])
      );
      return this;
    },
    createMap(source, destination, options: CreateMapOptions = {}) {
      // if namingConventions isn't passed in for this Mapping pair, use the global ones
      if (options && !options.namingConventions) {
        options.namingConventions = namingConventions;
      }

      // create the initial mapping between source and destination
      const mapping = plugin.initializeMapping(source, destination, options);

      // apply typeConverters
      if (mapping) {
        applyTypeConverters(mapping, typeConverters);
      }

      // return the FluentFunction for chaining
      return createMapFluentFunction(mapping!);
    },
    getMapping: plugin.getMapping.bind(plugin),
    addProfile(profile) {
      profile(this);
      return this;
    },
    map(
      sourceObj: Record<string, unknown>,
      destination,
      source,
      destinationObjOrOptions?: Record<string, unknown>,
      options?: MapOptions
    ) {
      // if source is null/undefined, return
      if (sourceObj == null) {
        return sourceObj;
      }

      const { preMap, postMap } = plugin;

      // run preMap if available
      const [sourceInstance] = preMap
        ? preMap.apply(plugin, [source, destination, sourceObj])
        : [sourceObj];

      // get mapping between Source and Destination
      const mapping: Mapping | undefined = this.getMapping(source, destination);

      // null check mapping and fail fast
      mappingNullCheck(mapping, errorHandler, source, destination);

      // check mutate or return

      // if destinationObjOrOptions has beforeMap or afterMap
      // or destinationObjOrOptions is null/undefined => this is a mapReturn
      // TODO(chau): this might fail if destinationObj has a beforeMap/afterMap property on the consumer side.
      if (
        (destinationObjOrOptions &&
          ('beforeMap' in destinationObjOrOptions ||
            'afterMap' in destinationObjOrOptions ||
            'extraArguments' in destinationObjOrOptions)) ||
        destinationObjOrOptions == null
      ) {
        const result = mapReturn(
          sourceInstance,
          mapping!,
          destinationObjOrOptions as MapOptions,
          this,
          errorHandler
        );

        if (postMap) {
          return postMap.apply(plugin, [destination, result]);
        }

        return result;
      }

      mapMutate(
        sourceInstance,
        mapping!,
        options || {},
        this,
        errorHandler,
        destinationObjOrOptions
      );
      if (postMap) {
        destinationObjOrOptions = postMap(destination, destinationObjOrOptions);
      }
    },
    mapAsync(
      sourceObj: Record<string, unknown>,
      destination,
      source,
      destinationObjOrOptions?: Record<string, unknown>,
      options?: MapOptions
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
    mapArray(
      sourceArr: Record<string, unknown>[],
      destination,
      source,
      options?: MapArrayOptions
    ) {
      // if source is null/undefined, return
      if (sourceArr == null) {
        return sourceArr;
      }

      // default runPreMap to true
      const { runPreMap = true } = options || {};

      // run preMapArray if available
      if (runPreMap && plugin.preMapArray) {
        sourceArr = plugin.preMapArray.apply(plugin, [source, sourceArr]);
      }

      return mapArray(
        sourceArr,
        destination,
        source,
        options || {},
        this,
        errorHandler
      );
    },
    mapArrayAsync(
      sourceArr: Record<string, unknown>[],
      destination,
      source,
      options?: MapArrayOptions
    ) {
      return Promise.resolve(
        this.mapArray(sourceArr, destination, source, options)
      );
    },
    dispose() {
      if (plugin.dispose) {
        plugin.dispose();
      }
    },
  };
}
