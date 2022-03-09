class BadRequestError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

class ErrorHandler extends Error {
    constructor()
}