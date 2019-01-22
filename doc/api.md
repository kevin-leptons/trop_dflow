# class DataFlow

```js
const {DataFlow} = require('@trop/dflow')
```

## constructor(dirs)

**input**

* `dirs` / `Array<string>`. List of path to schema directories.

## verify(id, data)

**input**

* `name` / `string`. Identity of schema, follow `$id` in JSON Schema.
* `item` / `any`. Data item to verify.

**output**

* `undefined` on valid data
* `Array<Object>` on invalid data
