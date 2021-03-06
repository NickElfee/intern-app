import { Identifiable } from '@intern/data';

export function schema<T extends Identifiable>(
  config: Record<Exclude<keyof T, '_id'>, any>
): Record<Exclude<keyof T, '_id'>, any> {
  return config;
}