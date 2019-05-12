# class DataFlow

```js
const {DataFlow} = require('@trop/dflow')
```

## constructor(dirs=[], conf={atom: true})

* `dirs` / `Array<String>` / `[]` - List of path to schema directories.
* `conf` / `Object` / `{}`
* `conf.atom` / `Boolean` / `true` - Load built-in atom schemas

## verify(id, data)

* Input
    * `name` / `string`. Identity of schema, follow `$id` in JSON Schema.
    * `item` / `any`. Data item to verify.
* Output
    * `undefined` - Data is valid
    * `Array<Object>` Data is invalid

## get(id)

* Input
    * `id` / `String` - Identity of schema
* Output
    * `Object` - JSON schema
    * `undefined` - Schema does not exists
