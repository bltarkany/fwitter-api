const router = require("express").Router();
// import user controllers
const {
  login,
  signup,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require("../../controllers/userControllers");

module.exports = router;
