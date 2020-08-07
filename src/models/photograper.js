const mongoose = require("mongoose");

//esquema for Photograper
const photograperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
  },
  lastName: {
    type: String,
    min: 3,
    required: true,
  },
  email: {
    type: String,
    min: 5,
    required: true,
  },
  password: {
    type: String,
    required: true,
    match: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
    min: 1,
  },

  handynumber: {
    type: Number,
    min: 10,
  },

  adress: {
    type: String,
    min: 5,
    required: true,
  },

  city: {
    type: String,
    min: 5,
    required: true,
  },

  speciality: {
    type: String,
    min: 5,
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
