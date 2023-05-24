const { Schema, model } = require("mongoose");
const replySchema = require("./reply");

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    like: {
      type: Number,
      default: 0,
    },
    replies: [replySchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    _id: false,
  }
);

// virtuals
commentSchema.virtual("replyCount").get(function () {
  return this.replies.length;
});

// model creation
const Comment = model("comment", commentSchema);

module.exports = Comment;
