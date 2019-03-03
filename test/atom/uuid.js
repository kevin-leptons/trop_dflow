const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/uuid'

describe(`schema:${schema}`, () => {
    it('an UUID v4', () => {
        let data = 'd7b60a25-b994-4d37-9d91-ef642a5e6df7'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('an UUID v4 with uppercase', () => {
        let data = 'D7B60A25-B994-4D37-9D91-EF642A5E6DF7'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('too short', () => {
        let data = 'd7b60a25-b994-4d37-9d91-'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('too long', () => {
        let data = 'd7b60a25-b994-4d37-9d91-ef642a5e6df7-'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('contains invalid symbols ;', () => {
        let data = 'd7b60a25-b994-4d37-9d91-ef642a5e6df7;'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
