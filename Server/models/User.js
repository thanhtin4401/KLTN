const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      //username ton tai thi ko dc tao nua
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      //username ton tai thi ko dc tao nua
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    role: {
      type: String,
      require: true,
      minlength: 3,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
