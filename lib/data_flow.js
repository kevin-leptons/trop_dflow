const Ajv = require('ajv')

const walk_dir = require('./walk_dir')
const {IdentityError} = require('./error')

class DataFlow {
    constructor(dirs) {
        this._ajv = this._load_schema_dirs(dirs)
    }

    verify(name, data) {
        let validate = this._ajv.getSchema(name)

        if (!validate) {
            throw new IdentityError(name)
        }
        if (!validate(data)) {
            return validate.errors
        }
    }

    // PRIVATE MEMBERS

    _load_schema_dirs(dirs) {
        let ajv = Ajv()

        for (let dir of dirs) {
            this._load_schema_dir(dir, ajv)
        }

        return ajv
    }

    _load_schema_dir(dir, ajv) {
        walk_dir(dir, (file) => {
            let schema = require(file)

            ajv.addSchema(schema)
        })
    }
}

module.exports = DataFlow
