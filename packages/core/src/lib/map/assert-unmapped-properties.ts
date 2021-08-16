import type { Dictionary, ErrorHandler } from '@automapper/types';

/**
 * Depends on implementation of plugin.initializeMapping
 */
export function assertUnmappedProperties<
  TDestination extends Dictionary<TDestination> = any
>(
  destination: TDestination,
  configuredKeys: string[],
  errorHandler: ErrorHandler
) {
  const unmappedKeys = Object.keys(destination).filter((destinationKey) => {
    const isAlreadyConfigured = configuredKeys.some(
      (configuredKey) => configuredKey === destinationKey
    );
    const isWritable =
      Object.getOwnPropertyDescriptor(destination, destinationKey).writable ===
      true;
    return !isAlreadyConfigured && isWritable;
  });

  if (unmappedKeys.length) {
    errorHandler.handle(`
Unmapped properties:
-------------------
${unmappedKeys.join(',\n')}
`);
  }
}
