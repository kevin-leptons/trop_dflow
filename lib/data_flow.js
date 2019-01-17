const Ajv = require('ajv')

const walk_dir = require('./walk_dir')
const {SchemaNameError} = require('./error')

class DataFlow {
    constructor(dirs) {
        this._ajv = this._load_schema(dirs)
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

    _load_schema(dirs) {
        let ajv = Ajv()

        for (let dir of dirs) {
            this._load_dir(dir, ajv)
        }

        return ajv
    }

    _load_dir(dir, ajv) {
        walk_dir(dir, (file) => {
            let schema = require(file)

            ajv.addSchema(schema)
        })
    }
}

module.exports = DataFlow
