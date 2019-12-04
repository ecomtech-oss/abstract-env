import { Option } from 'nanoption';

declare function getValue(key: string): string;

export declare function createConfig(defaults?: Record<string, string>) {
  return getValue;
};

declare function getValueOptional(key: string): Option<string>;

export declare function createOptionalConfig(
  defaults?: Record<string, string>,
) {
  return getValueOptional;
};
