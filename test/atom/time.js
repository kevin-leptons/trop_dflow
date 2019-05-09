const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/time'

describe(`schema:${schema}`, () => {
    it('20:20:39+00:00', () => {
        let data = '20:20:39+00:00'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('20:20:39+00:00x', () => {
        let data = '20:20:39+00:00x'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('2019-01-01T00:00:00Z', () => {
        let data = '2019-01-01T00:00:00Z'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('2147483648', () => {
        let data = 2147483648
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('-1', () => {
        let data = -1
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('1', () => {
        let data = -1
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('string abc', () => {
        let data = 'abc'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
