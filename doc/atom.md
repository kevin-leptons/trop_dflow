# Atom Schemas

## General

* `//atom/int` - integer number
* `//atom/uint` - unsigned integer number, >= 0
* `//atom/pint` - possitive integer number, >= 1
* `//atom/nint` - negative integer number, < 0
* `//atom//float` - float number
* `//atom/ufloat` - unsigned float number, >= 0
* `//atom/pfloat` - possitive float numer, > 0
* `//atom/nfloat` - negative float number, < 0

## Standarlization

* `//atom/email` - email address, RFC 5322, section 3.4.1
* `//atom/ipv4` - texual representation for Internet Address version 4,
  RFC 2673, section 3.2
* `//atom/ipv6` - texual representation for Internet Address version 6,
  RFC 2373, section 2.2
* `//atom/http/METHOD`, RFC 7231, section 4
* `//atom/http/STATUS`, RFC 7231, section 6
* `//atom/jwt` - JSON Web Token String, RFC 7519
* `//atom/datetime` - date and time string, RFC 3339
* `//atom/base64` - encoded bits, RFC 4648, section 4
* `//atom/base64url` - encoded bits, RFC 4648, section 5
* `//atom/base32` - encoded bits, RFC 4648, section 6
* `//atom/base32hex` - encoded bits, RFC 4648, section 7
* `//atom/base16` - string represents for a number, RFC 4648, section 8
* `//atom/uuidv4` - unique identifier, RFC 4122

## Non Standarlization

* `//atom/timestamp` - UNIX timestamp
* `//atom/object_id` - ObjectId, MongoDB
* `//atom/bcrypt_2abxy` -  Blowfish Cipher, version 2a, 2b, 2x and 2y
