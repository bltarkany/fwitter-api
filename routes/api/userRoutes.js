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

// login a user
router.route("/login").post(login);

// signup a user
router.route("/signup").post(signup);

// get all users
router.route("/").get(getUsers);

// get user by id, update user by id, delete user by id
router
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

// add friend, remove friend
router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
