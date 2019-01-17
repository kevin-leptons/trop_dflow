# class DataFlow

```js
const {DataFlow} = require('@trop/dflow')
```

## constructor(dirs)

* `dirs` / `Array<string>`. Path to schema directory.

## verify(id, item)

* `name` / `string`. Identity of schema, follow `$id` in JSON Schema.
* `item` / `any`. Data item to verify.
