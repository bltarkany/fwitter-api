const { Schema, Types } = require("mongoose");

const replySchema = new Schema(
  {
    replyId: {
      type: Schema.Types.ObjectId,
      default: new Types.ObjectId(),
    },
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
    created_at: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = replySchema;
