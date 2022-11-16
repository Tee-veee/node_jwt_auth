const CustomAPIError = require("./custom-error");

class BadRequestError extends CustomAPIError {
  constructor(message) {
    const BAD_REQUEST = 400;

    super(message);
    this.statusCode = BAD_REQUEST;
  }
}

module.exports = BadRequestError;
