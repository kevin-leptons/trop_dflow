const assert = require('assert')

const flow = require('./_flow')

let methods = ['get', 'post', 'put', 'patch', 'delete', 'option']
for (let method of methods) {
    let schema = `//atom/http/${method}`

    describe(`schema://atom/http/${method}`, () => {
        it(`${method}`, () => {
            let e = flow.verify(schema, method)

            assert.equal(e, undefined)
        })

        it('it is not HTTP method', () => {
            let data = 'it is not HTTP method'
            let e = flow.verify(schema, data)

            assert.notEqual(e, undefined)
        })
    })
}
