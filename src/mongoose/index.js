// Nodeplusplus.com
// src/mongoose/index.js

const mongoose = require("mongoose");

const UserSchema = require("./User");

const mongoURL = "mongodb://localhost:27017/zero2one";
mongoose.connect(
  mongoURL,
  { useNewUrlParser: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
