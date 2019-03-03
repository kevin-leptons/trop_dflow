const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/email'

describe(`schema:${schema}`, () => {
    it('an email', () => {
        let data = 'some-one@some-where.some-country'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('without divider @', () => {
        let data = 'some-one some-where.some-country'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('without domain ', () => {
        let data = 'some-one@'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('with invalid symbols ;', () => {
        let data = 'some-one;@some-where.some-country'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })
})
