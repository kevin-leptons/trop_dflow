const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/bcrypt_2abxy'

describe(`schema:${schema}`, () => {
    it('version 2a', async () => {
        let data = '$2b$10$KUng9EPlraYWHRiBjvDXPehS466Bgj6/YQUQgCwGoPYsPkEGCMO.i'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('version 2b', async () => {
        let data = '$2b$10$KUng9EPlraYWHRiBjvDXPehS466Bgj6/YQUQgCwGoPYsPkEGCMO.i'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('version 2x', async () => {
        let data = '$2b$10$KUng9EPlraYWHRiBjvDXPehS466Bgj6/YQUQgCwGoPYsPkEGCMO.i'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('version 2y', async () => {
        let data = '$2b$10$KUng9EPlraYWHRiBjvDXPehS466Bgj6/YQUQgCwGoPYsPkEGCMO.i'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('version 2', async () => {
        let data = '$2$10$KUng9EPlraYWHRiBjvDXPehS466Bgj6/YQUQgCwGoPYsPkEGCMO.i'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('too short', async () => {
        let data = '$2b$10$KUng9EPlraYWHRiBjvDXPehS466Bgj6/YQUQgCwGoPYsPkEGCMO'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
