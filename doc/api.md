# class DataFlow

```js
const {DataFlow} = require('@trop/dflow')
```

## constructor(dirs=[], conf={atom: true})

**input**

* `dirs` / `Array<String>` / [] - List of path to schema directories.
* `conf` / `Object` / {}
* `conf.atom` / `Boolean` / true - Load built-in atom schemas

## verify(id, data)

**input**

* `name` / `string`. Identity of schema, follow `$id` in JSON Schema.
* `item` / `any`. Data item to verify.

**output**

* `undefined` on valid data
* `Array<Object>` on invalid data
