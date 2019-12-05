import { Option } from 'nanoption';

export function createConfig(defaults = {}, globalVariableName = '_env_') {
  return function getValue(key) {
    // eslint-disable-next-line no-var
    var value = (window._env_ || {})[globalVariableName] || defaults[key];

    if (typeof value === 'undefined') {
      throw new Error(`Can not find configuration value for key ${key}`);
    }

    return value;
  };
}

export function createOptionalConfig(
  defaults = {},
  globalVariableName = '_env_',
) {
  return function getValue(key) {
    return Option.of((window._env_ || {})[globalVariableName] || defaults[key]);
  };
}
