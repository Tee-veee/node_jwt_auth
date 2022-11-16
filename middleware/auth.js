const { UnauthenticatedError } = require("../errors/index");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Credentials not authorized");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = decodedToken;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Credentials not authorized");
  }
};

module.exports = authenticationMiddleware;
