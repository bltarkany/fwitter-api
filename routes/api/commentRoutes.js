const router = require("express").Router();
const {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
  likeComment,
  unlikeComment,
  replyToComment,
  deleteReply,
} = require("../../controllers/commentController");

// get all comments, create comment
router.route("/").get(getAllComments).post(createComment);

// get comment by id, update comment, delete comment
router.route("/:id").get(getComment).put(updateComment).delete(deleteComment);

// like comment
router.route("/:id/like").post(likeComment);

// unlike comment
router.route("/:id/unlike").post(unlikeComment);

// reply to comment, delete reply
router.route("/:id/reply").post(replyToComment).delete(deleteReply);

module.exports = router;
