const path = require('path')
const assert = require('assert')

const {DataFlow, SchemaNameError} = require('../lib')

describe('class DataFlow', () => {
    flow = null

    it('constructor()', () => {
        let schema_dir = path.join(__dirname, 'schema')

        flow = new DataFlow(schema_dir)
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
})
