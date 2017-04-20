/* global describe, it */

import assert from 'assert'
import {encode, decode, trim} from '..'

const base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const urlSafeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'

describe('url-safe', function () {
  const b64 = [base64chars, base64chars, base64chars].join()
  const safe = [urlSafeChars, urlSafeChars, urlSafeChars].join()

  it('should encode base64 chars', function () {
    const res = encode(b64)
    assert.strictEqual(res, safe)
  })

  it('should decode url-safe-base64 chars into base64', function () {
    const res = decode(safe)
    assert.strictEqual(res, b64)
  })

  describe('should trim padding from url-safe-base64', function () {
    ;[
      ['A', 'A'],
      ['A=', 'A'],
      ['A==', 'A'],
      ['A===', 'A=']
    ].forEach((test) => {
      it(test[0], function () {
        const res = trim(test[0])
        assert.strictEqual(res, test[1])
      })
    })
  })

  describe('should trim padding from url-safe-base64', function () {
    ;[
      ['A', 'A'],
      ['A.', 'A'],
      ['A..', 'A'],
      ['A...', 'A.']
    ].forEach((test) => {
      it(test[0], function () {
        const res = trim(test[0])
        assert.strictEqual(res, test[1])
      })
    })
  })
})
