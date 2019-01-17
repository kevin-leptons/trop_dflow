const path = require('path')
const assert = require('assert')

const {DataFlow, SchemaNameError} = require('../lib')

describe('class DataFlow', () => {
    flow = null

    it('constructor()', () => {
        let schema_dir1 = path.join(__dirname, 'schema1')
        let schema_dir2 = path.join(__dirname, 'schema2')

        flow = new DataFlow([schema_dir1, schema_dir2])
    })

    it('constructor() => error:directory', () => {
        assert.throws(() => {
            new DataFlow('path/to/not/exist/directory')
        }, Error)
    })

    it('verify(personal)', () => {
        flow.verify('//trop/front/personal', {
            name: 'kevin',
            age: 18,
            gender: 'male'
        })
    })

    it('verify(personal) => error:Array', () => {
        assert.throws(() => {
            flow.verify('//trop/front/personal', {
                name: 100,
                age: 'kevin'
            })
        }, Array)
    })

    it('verify(personal) => error:SchemaNameError', () => {
        assert.throws(() => {
            flow.verify('//trop/front/does_not_exist', null)
        }, SchemaNameError)
    })

    it('verify(hero)', () => {
        flow.verify('//trop/hero', {
            name: 'hulk',
            strength: 69
        })
    })

    it('verify(hero) => error:Array', () => {
        assert.throws(() => {
            flow.verify('//trop/hero', null)
        }, Array)
    })
})
