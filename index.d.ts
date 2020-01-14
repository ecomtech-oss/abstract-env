import { Option } from 'nanoption';

type GetValue = (key: string) => string;

export declare function createConfig(
  defaults?: Record<string, string | undefined>,
  globalVariableName?: string,
): GetValue;

type GetValueOptional = (key: string) => Option<string>;

export declare function createOptionalConfig(
  defaults?: Record<string, string | undefined>,
  globalVariableName?: string,
): GetValueOptional;
