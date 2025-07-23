/** @format */

const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  upadateUser,
} = require("../controllers/userController");

router.get("/users", getUsers);
router.post("/users", addUser);

module.exports = router;
