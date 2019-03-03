const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/base64'

describe(`schema:${schema}`, () => {
    it('a string', () => {
        let data = [
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            '0123456789+/='
        ]
        let e = flow.verify(schema, data.join(''))

        assert.equal(e, undefined)
    })

    it('invalid character', () => {
        let data = 'ABCD;'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('wrong padding position', () => {
        let data = 'ABC=D'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
