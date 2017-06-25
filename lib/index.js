'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* @module url-safe-base64
* @license UNLICENSE
* @example
* import {
*   encode, decode, trim,
*   isBase64, isUrlSafeBase64
* } from 'url-safe-base64'
* const safe = encode('A/B+C==')
* // > 'A-B_C..'
* trim(safe)
* // > 'A-B_C'
* const base64 = decode(safe)
* // > 'A/B+C=='
* isBase64(base64)
* // > true
* isBase64(safe)
* // > false
* isUrlSafeBase64(base64)
* // > false
* isUrlSafeBase64(safe)
* // > true
*/

var ENC = {
  '+': '-',
  '/': '_',
  '=': '.'
};
var DEC = {
  '-': '+',
  '_': '/',
  '.': '='
};

/**
* encode base64 string url safe
* @param {String} base64 - base64 encoded string
* @return {String} url-safe-base64 encoded
*/
var encode = exports.encode = function encode(base64) {
  return base64.replace(/[+/=]/g, function (m) {
    return ENC[m];
  });
};

/**
* decode url-safe-base64 string to base64
* @param {String} safe - url-safe-base64 string
* @return {String} base64 encoded
*/
var decode = exports.decode = function decode(safe) {
  return safe.replace(/[-_.]/g, function (m) {
    return DEC[m];
  });
};

/**
* trim padding - `window.atob` might handle trimmed strings, e.g. in Chrome@57, Firefox@52
* @param {String} string - base64 or url-safe-base64 string
* @return {String} string with padding chars removed
*/
var trim = exports.trim = function trim(string) {
  return string.replace(/[.=]{1,2}$/, '');
};

/**
* checks if `string` is base64 encoded
* @param {String} string
* @return {Boolean} true if base64 encoded
*/
var isBase64 = exports.isBase64 = function isBase64(string) {
  return (/^[A-Za-z0-9+/]*[=]{0,2}$/.test(string)
  );
};

/**
* checks if `string` is url-safe-base64 encoded
* @param {String} string
* @return {Boolean} true if url-safe-base64 encoded
*/
var isUrlSafeBase64 = exports.isUrlSafeBase64 = function isUrlSafeBase64(string) {
  return (/^[A-Za-z0-9_-]*[.]{0,2}$/.test(string)
  );
};