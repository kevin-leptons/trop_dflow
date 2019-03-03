const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/timestamp'

describe(`schema:${schema}`, () => {
    it('1970-01-01T00:00:00Z', () => {
        let data = 0
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('2019-01-01T00:00:00Z', () => {
        let data = 1546300800
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('2038-01-19T03:14:08', () => {
        let data = 2147483647
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
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
})
