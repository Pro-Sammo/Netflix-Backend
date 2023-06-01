const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: Array,
});

module.exports = mongoose.model("User", userSchema); // Changed "users" to "User" for the model name
