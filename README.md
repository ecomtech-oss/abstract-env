# abstract-env

This in companion of [parcel-plugin-real-env](https://github.com/samokat-oss/parcel-plugin-real-env). It just wraps global *env* variable for safty using configuration.

## TL;DR

```
yarn add @samokat/abstract-env
```

```js
// config.js

import { createConfig } from '@samokat/abstract-env'

const config = createConfig({
  API_URL: 'fallback-for-empty-var',
})

const apiUrl = config('API_URL')
```

## Details

Library provides two way for creating configuration: `createConfig` (throws Error for empty value) and `createOptionalConfig` (returns [Option](https://github.com/igorkamyshev/nanoption/) for every value).

Both creators accept fallback values as first agrument and optional name of global config store (default is `_env_`) as second.

Example with simple creator:

```js
// config.js

import { createConfig } from '@samokat/abstract-env'

const config = createConfig({
  API_URL: 'fallback-for-empty-var',
}, '_custom_variable_in_global_scope_')

const apiUrl = config('API_URL') // 'fallback-for-empty-var'
```

Example with optional creator:

```js
// config.js

import { createOptionalConfig } from '@samokat/abstract-env'

const config = createOptionalConfig({}, '_custom_variable_in_global_scope_')

const apiUrl = config('API_URL') // Option<string>
apiUrl.isEmpty() // true
```

## Common usage

In common project we use [Parcel](http://parceljs.org/) as bundler, and it can pass env variables to application in dev mode.

```js
// config.js

import { createConfig } from '@samokat/abstract-env'

const config = createConfig({
  // In dev mode we accept current env variable
  // In prod mode it will be empty
  // and we accept value from global store, injected by external forces
  API_URL: process.env.API_URL,
})

const apiUrl = config('API_URL')
```

## HowTo: Release

1. Make your changes and commit it
2. Run `yarn s release`
3. Run `git push --follow-tags`
4. Run `npm publish`
5. Brilliant!
