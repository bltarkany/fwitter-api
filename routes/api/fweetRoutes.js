const router = require("express").Router();
// import fweet controllers
const {
  getAllFweets,
  getFweetById,
  createFweet,
  updateFweetById,
  deleteFweetById,
  likeFweetById,
  unlikeFweetById,
} = require("../../controllers/fweetControllers");

// get all fweets
router.route("/").get(getAllFweets);

// get fweet by id
router
  .route("/:id")
  .get(getFweetById)
  .put(updateFweetById)
  .delete(deleteFweetById);

// create fweet
router.route("/").post(createFweet);

// like fweet
router.route("/:id/like").post(likeFweetById);

// unlike fweet
router.route("/:id/unlike").post(unlikeFweetById);

module.exports = router;
