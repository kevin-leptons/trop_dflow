const path = require('path')
const fs = require('fs')

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
            if (!this._is_json_file(file)) {
              return
            }

            let raw = fs.readFileSync(file)
            let schema = null
            try {
              schema = JSON.parse(raw)
            } catch (e) {
              throw new SyntaxError(`${e.message} in file "${file}"`);
            }
            ajv.addSchema(schema)
        })
    }

    _is_json_file(file) {
        return path.extname(file) === '.json'
    }
}

module.exports = DataFlow
