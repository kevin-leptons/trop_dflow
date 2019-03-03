const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/base16'

describe(`schema:${schema}`, () => {
    it('a string', () => {
        let data = [
            'ABCDEF',
            '0123456789'
        ]
        let e = flow.verify(schema, data.join(''))

        assert.equal(e, undefined)
    })

    it('invalid character', () => {
        let data = 'ABCDIJK;'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
