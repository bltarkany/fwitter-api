const { Schema, model } = require("mongoose");

const fweetSchema = new Schema(
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
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString(),
    },
    // attach likes to user ?? subdocument??
    // change to array of likes?? with user _id??
    // or both??
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    // TODO: add refweet field????????
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// virtuals
fweetSchema.virtual("commentsCount").get(function () {
  return this.comments.length;
});

// model creation
const Fweet = model("fweet", fweetSchema);

module.exports = Fweet;
