const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/jwt'

describe(`schema:${schema}`, () => {
    it('an JSON web token', () => {
        let data = [
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
            'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ',
            'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        ]
        let e = flow.verify(schema, data.join('.'))

        assert.equal(e, undefined)
    })

    it('missing part 3', () => {
        let data = [
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
            'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
        ]
        let e = flow.verify(schema, data.join('.'))

        assert.notEqual(e, undefined)
    })

    it('missing part 2', () => {
        let data = [
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        ]
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('empty', () => {
        let data = ''
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('contains invalid symbols', () => {
        let data = '$%^&'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
