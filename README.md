# url-safe-base64

> url safe base64 en- and decoding

[![NPM version](https://badge.fury.io/js/url-safe-base64.svg)](https://www.npmjs.com/package/url-safe-base64/)

## TOC

* [Example](#example)
* [API](#api)
  * [`encode(base64)`](#encodebase64)
  * [`decode(safe)`](#decodesafe)
  * [`trim(str)`](#trimstr)
* [Installation](#installation)
* [Tests](#tests)
* [LICENSE](#license)

## Example

```js
import {encode, decode, trim} from 'url-safe-base64'
const safe = encode('A/B+C==')
// > 'A-B_C..'
trim(safe)
// > 'A-B_C'
const base64 = decode(safe)
// > 'A/B+C=='
```

## API

### encode(base64)

encode base64 string url safe

### Parameters

| parameter | type   | description             |
| --------- | ------ | ----------------------- |
| `base64`  | String | base64 encoded string |

**Returns** `String`, url-safe-base64 encoded


### decode(safe)

decode url-safe-base64 string to base64

### Parameters

| parameter | type   | description              |
| --------- | ------ | ------------------------ |
| `safe`    | String | url-safe-base64 string   |

**Returns** `String`, base64 encoded


### trim(str)

trim padding - `window.atob` might handle trimmed strings, e.g. in Chrome@57, Firefox@52

### Parameters

| parameter | type   | description                        |
| --------- | ------ | ---------------------------------- |
| `str`     | String | base64 or url-safe-base64 string   |

**Returns** `String`, string with padding chars removed

## Installation

```sh
$ npm install --save url-safe-base64
```

## Tests

```sh
$ npm test
```

## LICENSE

UNLICENSE <https://unlicense.org/>
