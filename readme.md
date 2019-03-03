# dflow

Data Modeling Tool - Design, re-use schemas and verify data

# Features

* Specify schemas by JSON Schema Syntax
* Re-use schemas by keyword pair `$id` - `$ref`
* Load schemas from directories, recursive.
* Verify data by schema identity.

# Usage

**Step 1. Design Basic Schemas**

File `schema/name.json` - classical name

```json
{
    "$id": "//org/name",
    "type": "type",
    "pattern": "^[a-zA-Z0-9 ]+$"
}
```

File `schema/uint.json` - unsigned integer

```json
{
    "$id": "//org/uint",
    "type": "integer",
    "minimum": 0
}
```

**Step 2. Re-use Basic Schemas**

File `schema/hero.json` - a hero

```json
{
    "$id": "//org/hero",
    "type": "object",
    "additionalProperties": false,
    "required": ["name", "strength"],
    "properties": {
        "name": {"$ref": "//org/name"},
        "strength": {"$ref": "//org/uint"}
    }
}
```

**Step 3. Verify Data**

File `main.js`

```js
const path = require('path')
const {DataFlow} = require('@trop/dflow')

let dir = path.join(__dirname, 'schema')
let flow = new DataFlow([dir])

let id = '//org/hero'
let data = {
    name: 'hulk',
    strength: 69
}
let error = flow.verify('//org/hero', data)
```

* `dir`, path to directory contains schema files
* `id`, identity of schema, correspond with `$id` keyword
* `data`, data to be verify
* `verify()`, validate data follow schema identity
* `error`, if data is invalid then return an array contains errors

# References

* [Changelog](changelog.md)
* [Contribution](contribution.md)
* [APIs](doc/api.md)
* [Built-in Atom Schemas](doc/atom.md)
* [Development](doc/dev.md)
* [JSON Schema](https://json-schema.org/)
