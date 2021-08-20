const Role = require("../models/role");

const admin = async (req, res, next) => {
  let role = await Role.findById(req.user.roleId);
  if (!role) return res.status(400).send(" process failed : role no exist ");

  if (role.name == "admin") next();
  else return res.status(400).send("Failed process: unauthorized user");
};

module.exports = admin;
