const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/pint'

describe(`schema:${schema}`, () => {
    it('1', () => {
        let data = 1
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('0', () => {
        let data = 0
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('-1', () => {
        let data = -1
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('one', () => {
        let data = -1
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
