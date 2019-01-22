class IdentityError extends Error {
    constructor(id) {
        super(id)
        this.name = this.constructor.name
    }
}

module.exports = {
    IdentityError: IdentityError
}
