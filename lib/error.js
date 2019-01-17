
class SchemaNameError extends Error {
    constructor(name) {
        super(name)
        this.name = this.constructor.name
    }
}

module.exports = {
    SchemaNameError: SchemaNameError
}
