const mongoose = require("mongoose");

//esquema for Photograper
const photograperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  lastName: {
    type: String,
    minlength: 3,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    required: true,
  },
  password: {
    type: String,
    required: true,
    match: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
    minlength: 1,
  },

  handyNumber: {
    type: Number,
    minlength: 10,
  },

  adress: {
    type: String,
    minlength: 5,
    required: true,
  },

  city: {
    type: String,
    minlength: 5,
    required: true,
  },

  speciality: {
    type: String,
    minlength: 5,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("photograpers", photograperSchema);
