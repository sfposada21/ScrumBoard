const express = require("express");
const router = express.Router(); 
const RoleController = require ("../controllers/role")

// GET POST PUT DELETE
// gttp://localhost:3001/api/role/get

router.post("/registerRole", RoleController.registerRole);
router.get("/listRole", RoleController.listRole);

module.exports = router;
