const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/base32'

describe(`schema:${schema}`, () => {
    it('a string', () => {
        let data = [
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            '234567='
        ]
        let e = flow.verify(schema, data.join(''))

        assert.equal(e, undefined)
    })

    it('invalid character', () => {
        let data = 'ABCDa012'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('wrong padding position', () => {
        let data = 'ABC=D'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
