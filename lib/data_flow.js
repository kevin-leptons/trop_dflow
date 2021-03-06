const path = require('path')
const fs = require('fs')

const Ajv = require('ajv')

const walk_dir = require('./walk_dir')
const {IdentityError} = require('./error')

class DataFlow {
    /*
    Input
        * dirs / Array<String> / [] - list of path to schema directories
        * conf / Object / {}
        * conf.atom / Boolean / true - load atomic schemas
    */
    constructor(dirs=[], conf={atom: true}) {
        if (conf.atom) {
            let atom_path = path.join(__dirname, 'atom')
            dirs.push(atom_path)
        }
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

    get(schema_id) {
        let validate = this._ajv.getSchema(schema_id)
        if (!validate) {
            return
        }
        return validate.schema
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
