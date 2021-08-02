import { createInitialMapping } from '@automapper/core';
import type { Dictionary, MapPluginInitializer } from '@automapper/types';
import { MappingClassId } from '@automapper/types';
import 'reflect-metadata';
import {
  ClassInstanceStorage,
  ClassMappingStorage,
  ClassMetadataStorage,
} from './storages';
import type { Constructible } from './types';
import {
  exploreMetadata,
  instantiate,
  isDerivedSourcePathOnSourceClasses,
  isMultipartSourcePathsInSource,
  prePropertiesLoop,
} from './utils';

/**
 *
 * A MapPlugin to work with JS/TS Classes.
 *
 * @param {ErrorHandler} errorHandler
 */
export const classes: MapPluginInitializer<Constructible> = (errorHandler) => {
  // Initialize all the storages
  const metadataStorage = new ClassMetadataStorage();
  const mappingStorage = new ClassMappingStorage();
  const instanceStorage = new ClassInstanceStorage();

  return {
    instantiate<TModel extends Dictionary<TModel> = any>(
      model: Constructible<TModel>,
      obj?: TModel
    ) {
      return instantiate(instanceStorage, metadataStorage, model, obj);
    },
    initializeMapping(source, destination, options?) {
      // If a mapping already exists, handle error and return;
      if (mappingStorage.has(source, destination)) {
        errorHandler.handle(
          `Mapping for source ${source.toString()} and destination ${destination.toString()} already exists`
        );
        return;
      }

      // Run the source and destination through Reflection to update storages
      // with information/metadata about source and destination
      exploreMetadata(metadataStorage, instanceStorage, source, destination);

      /**
       * Instantiate a new instance of Destination/Source along with any nested constructible
       *
       * ```ts
       * Foo {
       *   bar: Bar;
       * }
       * ```
       * `Foo#bar` is a nested constructible
       */
      const [destinationInstance, destinationNestedConstructible] =
        this.instantiate(destination);

      const [sourceInstance, sourceNestedConstructible] =
        this.instantiate(source);

      // Get a hold of the prototype of Source (in case of inheritance with extends keyword)
      const sourceProto = Object.getPrototypeOf(source);

      // Call `createInitialMapping` from the core package
      return createInitialMapping(
        sourceInstance,
        destinationInstance,
        sourceNestedConstructible as unknown[],
        destinationNestedConstructible as unknown[],
        (mapping) => {
          mappingStorage.set(source, destination, mapping);
        },
        options,
        {
          // classes plugin needs to pre-process the prototype of Source
          // before looping through the properties on the Destination
          prePropertiesLoop: prePropertiesLoop(
            source,
            metadataStorage,
            instanceStorage,
            sourceInstance,
            sourceNestedConstructible as unknown[]
          ),
          isMetadataNullAtKey: (key) => {
            return metadataStorage.getMetadataForKey(destination, key) === null;
          },
          // classes plugin needs to check for sourcePaths on the prototype of Source
          isMultipartSourcePathsInSource: (multipartSourcePaths, sourceObj) =>
            isMultipartSourcePathsInSource(
              multipartSourcePaths,
              sourceObj as Record<string, unknown>
            ),
          // classes plugin needs to check for the destinationPath (sourcePath) on the prototype of Source
          isDerivedSourcePathOnSource:
            isDerivedSourcePathOnSourceClasses(sourceProto),
        }
      );
    },
    getMapping(source, destination) {
      // get mapping of source and destination from mappingStorage
      const mapping = mappingStorage.get(source, destination);

      // handle error and fail fast if not found
      if (!mapping) {
        errorHandler.handle(
          `Mapping not found for source ${source.toString()} and destination ${destination.toString()}`
        );
        return;
      }

      // run preMap to get new instances of source and destination for mapping[MappingClassId.mappings]
      // this is to prevent mutation
      mapping[MappingClassId.mappings] = this.preMap!(source, destination);

      // return the mapping
      return mapping;
    },
    preMap<
      TSource extends Dictionary<TSource> = any,
      TDestination extends Dictionary<TDestination> = any
    >(
      source: Constructible<TSource>,
      destination: Constructible<TDestination>,
      sourceObj?: TSource,
      destinationObj?: TDestination
    ) {
      // Prepare the sourceInstance/destinationInstance with plain object sourceObj and destinationObj
      const [sourceInstance] = this.instantiate(source, sourceObj);
      const [destinationInstance] = this.instantiate(
        destination,
        destinationObj
      );

      return [sourceInstance, destinationInstance];
    },
    dispose() {
      metadataStorage.dispose();
      mappingStorage.dispose();
      instanceStorage.dispose();
    },
  };
};
