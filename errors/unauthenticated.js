const CustomAPIError = require("./custom-error");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    const UNAUTHORIZED = 401;
    super(message);
    this.statusCode = UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
