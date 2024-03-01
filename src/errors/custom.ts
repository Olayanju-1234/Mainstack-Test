export class CustomError extends Error {
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export class BadRequestError extends CustomError {
    constructor(message: string) {
        super(message, 404);
    }
}

export class NotFoundError extends CustomError {
    constructor(message: string) {
        super(message, 404);
    }
}

export class UnauthorizedError extends CustomError {
    constructor(message: string) {
        super(message, 401);
    }
}

export class ConflictError extends CustomError {
    constructor(message: string) {
        super(message, 409);
    }
}
