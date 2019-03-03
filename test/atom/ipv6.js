const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/ipv6'

describe(`schema:${schema}`, () => {
    it('a string', async () => {
        let data = '2001:db8:1234:0000:0000:0000:0000:0000'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('a string with uppercase', async () => {
        let data = '2001:DB8:1234:0000:0000:0000:0000:0000'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('missing a part', async () => {
        let data = '2001:db8:1234:0000:0000:0000:0000'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('contains invalid symbols', async () => {
        let data = '2001:db8:1234:0000:0000:0000:0000:XXXX'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
