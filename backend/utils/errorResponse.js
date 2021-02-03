class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statueCode = statusCode;
  }
}

export default ErrorResponse;
