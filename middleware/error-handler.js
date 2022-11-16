const { CustomAPIError } = require("../errors/index");
const errorHandlerMiddleware = (err, req, res, next) => {
  const INTERNAL_SERVER_ERROR = 500;

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(INTERNAL_SERVER_ERROR)
    .send("Something went wrong try again later");
};

module.exports = errorHandlerMiddleware;
