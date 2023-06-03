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
    // email validation
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must be a valid email address!"],
    },
    join_date: {
      typeof: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString(),
    },
    // password validation
    password: {
      type: String,
      required: true,
      minlength: 8,
      match: [
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-\._?&%@#!^]).{8,20}$/g,
        "Password must contain at least one number, lowercase, uppercase, and special character",
      ],
    },
    fweets: [
      {
        type: Schema.Types.ObjectId,
        ref: "fweet",
      },
    ],
    friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);
// bcrypt pre save or modification
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// bcrypt compare password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// virtuals
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

userSchema.virtual("fweetCount").get(function () {
  return this.fweets.length;
});

// model creation
const User = model("user", userSchema);

module.exports = User;
