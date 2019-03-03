const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/ipv4'

describe(`schema:${schema}`, () => {
    it('a string', async () => {
        let data = '192.168.1.1'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('out of range', async () => {
        let data = '256.168.1.1'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('missing a part', async () => {
        let data = '192.168.1.'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('contains invalid symbols', async () => {
        let data = '192.168.1.A'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
