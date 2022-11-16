const express = require("express");

const router = express.Router();

const { login, generateLuckyNumber } = require("../controllers/main");

const authenticationMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authenticationMiddleware, generateLuckyNumber);
router.route("/login").post(login);

module.exports = router;
