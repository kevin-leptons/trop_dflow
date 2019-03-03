const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/base32hex'

describe(`schema:${schema}`, () => {
    it('a string', () => {
        let data = [
            'ABCDEFGHIJKLMNOPQRSTUV',
            '0123456789='
        ]
        let e = flow.verify(schema, data.join(''))

        assert.equal(e, undefined)
    })

    it('invalid character', () => {
        let data = 'ABCDZ'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('wrong padding position', () => {
        let data = 'ABC=D'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
