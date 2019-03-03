const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/object_id'

describe(`schema:${schema}`, () => {
    it('an object ID ', async () => {
        let data = '507f191e810c19729de860ea'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('an object ID with uppercase symbols', async () => {
        let data = '507f191e810c19729dABCDEF'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('contains invalid symbols', async () => {
        let data = '507f191e810c19729dZZZZZZ'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('too short', async () => {
        let data = '507f191e810c19729dABCDE'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('too long', async () => {
        let data = '507f191e810c19729dABCDEFA'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
