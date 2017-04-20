'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* @module url-safe-base64
* @license UNLICENSE
* @example
* import {encode, decode, trim} from 'url-safe-base64'
* const safe = encode('A/B+C==')
* // > 'A-B_C..'
* trim(safe)
* // > 'A-B_C'
* const base64 = decode(safe)
* // > 'A/B+C=='
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
* @param {String} str - base64 or url-safe-base64 string
* @return {String} string with padding chars removed
*/
var trim = exports.trim = function trim(str) {
  return str.replace(/[.=]{1,2}$/, '');
};