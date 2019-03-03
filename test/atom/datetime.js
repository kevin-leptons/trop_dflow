const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/datetime'

describe(`schema:${schema}`, () => {
    it('with suffix Z', async () => {
        let data = '2018-12-31T23:59:60Z'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('with suffix +, then timezone', async () => {
        let data = '2018-12-31T23:59:60+07:00'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('with suffix -, then timezone', async () => {
        let data = '2018-12-31T23:59:60-07:00'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('with miniseconds, then suffix Z', async () => {
        let data = '2018-12-31T23:59:60.6969Z'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('without any suffix', async () => {
        let data = '2018-12-31T23:59:60'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('with suffix Z, then other symbols', async () => {
        let data = '2018-12-31T23:59:60ZAAAAA'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
