const mongoose = require("mongoose");

// schema de cliente
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/,
  },
  password: {
    type: String,
    required: true,
 },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
  },
  adress: {
    type: String,
    required: true,
  },
  register: {
    type: Date,
    default: Date.now,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("clients", clientSchema);
