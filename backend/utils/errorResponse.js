class ErrorWithCode extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends ErrorWithCode {
  constructor(message) {
    super(message, 400);
  }
}

class NotFoundError extends ErrorWithCode {
  constructor(message) {
    super(message, 404);
  }
}

class UnauthorizedError extends ErrorWithCode {
  constructor(message) {
    super(message, 401);
  }
}

class DuplicateFieldError extends ErrorWithCode {
  constructor(message) {
    super(message, 400);
  }
}

export default ErrorWithCode;
export {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  DuplicateFieldError,
};
