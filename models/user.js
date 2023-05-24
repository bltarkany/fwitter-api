const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 40,
    },
    last: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 40,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must be a valid email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
