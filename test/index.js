/* global describe, it */

import assert from 'assert'
import {encode, decode, trim, isBase64, isUrlSafeBase64} from '..'

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

  describe('should check if base64 encoded', function () {
    it('base64chars', function () {
      const res = isBase64(base64chars)
      assert.strictEqual(res, true)
    })
    it('urlSafeChars', function () {
      const res = isBase64(urlSafeChars)
      assert.strictEqual(res, false)
    })
    it('b64', function () {
      const res = isBase64(b64)
      assert.strictEqual(res, false)
    })
    it('safe', function () {
      const res = isBase64(safe)
      assert.strictEqual(res, false)
    })
  })

  describe('should check if url-safe-base64 encoded', function () {
    it('base64chars', function () {
      const res = isUrlSafeBase64(base64chars)
      assert.strictEqual(res, false)
    })
    it('urlSafeChars', function () {
      const res = isUrlSafeBase64(urlSafeChars)
      assert.strictEqual(res, true)
    })
    it('b64', function () {
      const res = isUrlSafeBase64(b64)
      assert.strictEqual(res, false)
    })
    it('safe', function () {
      const res = isUrlSafeBase64(safe)
      assert.strictEqual(res, false)
    })
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
