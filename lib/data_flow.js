const Ajv = require('ajv')

const walk_dir = require('./walk_dir')
const {SchemaNameError} = require('./error')

class DataFlow {
    constructor(dir) {
        this._ajv = this._load_schema(dir)
    }

    verify(name, item) {
        let validate = this._ajv.getSchema(name)

        if (!validate) {
            throw new SchemaNameError(name)
        }
        if (!validate(item)) {
            throw validate.errors
        }
    }

    // PRIVATE MEMBERS

    _load_schema(dir) {
        let ajv = Ajv()

        walk_dir(dir, (file) => {
            let schema = require(file)

            ajv.addSchema(schema)
        })

        return ajv
    }
}

module.exports = DataFlow
