const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user")
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerUser", UserController.registerUser)
router.get("/listUser/:name?", Auth, ValidateUser, UserController.listUser)

module.exports = router;
