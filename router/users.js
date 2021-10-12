const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/signup", userController.getSignupPage)

module.exports = router;