const path = require('path')
const assert = require('assert')

const {DataFlow, IdentityError, DataError} = require('../lib')

describe('class DataFlow', () => {
    flow = null

    it('constructor()', () => {
        let schema_dir1 = path.join(__dirname, 'schema1')
        let schema_dir2 = path.join(__dirname, 'schema2')

        flow = new DataFlow([schema_dir1, schema_dir2])
    })

    it('constructor(directory does not exist) => Error, code=ENOENT', () => {
        assert.throws(() => {
            new DataFlow(['path/to/not/exist/directory'])
        }, {
            code: 'ENOENT'
        })
    })

    it('verify(personal)', () => {
        let e = flow.verify('//trop/front/personal', {
            name: 'kevin',
            age: 18,
            gender: 'male'
        })
        assert.equal(e, undefined)
    })

    it('verify(invalid_name, invalid_age) => error', () => {
        let e = flow.verify('//trop/front/personal', {
            name: 100,
            age: 'kevin'
        })
        assert(e instanceof Array)
        assert(e.length > 0)
    })

    it('verify(does not exist schema) => IdentityError', () => {
        assert.throws(() => {
            flow.verify('//trop/front/does_not_exist', null)
        }, IdentityError)
    })

    it('verify(hero)', () => {
        let e = flow.verify('//trop/hero', {
            name: 'hulk',
            strength: 69
        })
        assert.equal(e, undefined)
    })

    it('verify(hero by null) => error', () => {
        let e = flow.verify('//trop/hero', null)

        assert(e instanceof Array)
        assert(e.length > 0)
    })
})
