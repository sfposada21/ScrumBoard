const express = require("express");
const router = express.Router(); 
const RoleController = require ("../controllers/role")
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");

// GET POST PUT DELETE
// gttp://localhost:3001/api/role/get

router.post("/registerRole", Auth, ValidateUser, Admin, RoleController.registerRole);
router.get("/listRole", Auth, ValidateUser, Admin, RoleController.listRole);

module.exports = router;
