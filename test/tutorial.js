describe('tutorial', () => {
    it('run', () => {
        const path = require('path')
        const {DataFlow} = require('../lib')

        let dir = path.join(__dirname, 'schema')
        let flow = new DataFlow([dir])

        let id = '//org/hero'
        let data = {
            name: 'hulk',
            strength: 69
        }
        let error = flow.verify('//org/hero', data)
    })
})
