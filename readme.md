# dflow

Data Modeling Tool - Make designing, standardize and verify data simple.

# Features

* Specify schemas by JSON Schema.
* Load schemas from directory, recursive.
* Verify data by schema.

# Usage

```js
const {DataFlow} = require('@trop/dflow')

let flow = new DataFlow(['schema/'])

flow.verify('//org/hero', {
    name: 'hulk',
    strength: 69,
    weapon: 'hands'
})
```

* `schema/`, path to directory contains schema files.
* `//org/personal`, the first argument is identity of schema.
* `{...}`, the second argument is data to be verify.
* `verify()`, validate data, if data is invalid then throw exception.

# Documents

* [Changelog](changelog.md)
* [Contribution](contribution.md)
* [APIs](doc/api.md)
* [Development](doc/dev.md)
