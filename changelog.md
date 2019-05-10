# Changelog

## v0.7.0

* Add `//atom/phone_number`

## v0.6.0

* Add `//atom/date` and `//atom/time`

## 0.5.0

* Default argument `dirs` of `DataFlow()` set to empty Array
* Add option `conf` to `DataFlow()`
* Add built-in schemas `//atom/*`

## v0.4.1

* Throw more detail information on invalid JSON files

## v0.4.0

* Fix load non JSON files
* Use "JSON.parse()" instead of "require()"

## v0.3.0

* On input schema ID does not exist, throw `IdentityError`
* On data error, return an `Array` instead of throw `Error`

## v0.2.0

* Load schema from directories

## v0.1.0

* Specify schems by JSON Schema.
* Load schemas from a directory.
* Verify data via name of schema.
