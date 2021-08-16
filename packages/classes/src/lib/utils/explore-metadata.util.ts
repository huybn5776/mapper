import { isDefined } from '@automapper/core';
import {
  AUTOMAP_PROPERTIES_METADATA_KEY,
  AUTOMAPPER_METADATA_FACTORY_KEY,
} from '../constants';
import type { ClassInstanceStorage, ClassMetadataStorage } from '../storages';
import type { Constructible } from '../types';
import type { PrimitiveWithDate } from '@automapper/types';

export function exploreMetadata(
  metadataStorage: ClassMetadataStorage,
  instanceStorage: ClassInstanceStorage,
  ...models: Constructible[]
) {
  // Loop through each models passed in
  for (const model of models) {
    // if metadataStorage hasn't had metadata of the model
    if (!metadataStorage.has(model)) {
      // get the metadata from Reflection and AUTOMAPPER_METADATA_FACTORY then populate metadataStorage and instanceStorage
      const metadataList = getMetadataList(model);

      // if no metadata, skip
      if (!isDefined(metadataList)) continue;
      // loop through metadata list
      for (const [
        propertyKey,
        { typeFn, depth, isGetterOnly },
      ] of metadataList) {
        metadataStorage.addMetadata(model, [
          [propertyKey],
          typeFn,
          isGetterOnly,
        ]);
        if (depth != null) {
          instanceStorage.setDepth(model, [propertyKey], depth);
        }
      }
    }
  }
}

export function getMetadataList(model: Constructible): [
  string,
  {
    typeFn: () => Constructible | PrimitiveWithDate;
    depth?: number;
    isGetterOnly?: boolean;
  }
][] {
  let metadataList =
    Reflect.getMetadata(AUTOMAP_PROPERTIES_METADATA_KEY, model) || [];

  if (model[AUTOMAPPER_METADATA_FACTORY_KEY]) {
    metadataList = metadataList.concat(
      model[AUTOMAPPER_METADATA_FACTORY_KEY]() || []
    );
  }

  return metadataList;
}
