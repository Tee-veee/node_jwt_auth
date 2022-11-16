const { BadRequestError } = require("../errors/index");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Login credentials invalid");
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Created", token });
};

const generateLuckyNumber = async (req, res) => {
  const { username } = req.user;

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `${luckyNumber}`,
  });
};

module.exports = {
  login,
  generateLuckyNumber,
};
