const assert = require('assert')

const flow = require('./_flow')

let schema = '//atom/phone_number'

describe(`schema:${schema}`, () => {
    it('with empty string', () => {
        let data = ''
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('without sign symbol', () => {
        let data = '1 2'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('with country code, no subscriber', () => {
        let data = '+1'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('with country code and subscriber ', () => {
        let data = '+1 2'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('too long', () => {
        let data = '+1 123456789012345'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('contains non digit symbols', () => {
        let data = '+1 abcdef#'
        let e = flow.verify(schema, data)

        assert.notEqual(e, undefined)
    })

    it('with US number', () => {
        let data = '+1 4155552671'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })

    it('with Vietnam number', () => {
        let data = '+84 941347249'
        let e = flow.verify(schema, data)

        assert.equal(e, undefined)
    })
})
