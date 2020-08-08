const mongoose = require("mongoose");

// schema for laboral offer
const offerSchema = new mongoose.Schema({
  clientId: {
    Number,
    required: true,
  },
  clientPhotograph: {
    Number,
    required: true,
  },

  decription: {
    type: String,
    required: true,
    maxlength: 30,
  },
  eventType: {
    type: String,
    required: true,
  },
  eventAdress: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  eventDuration: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("offers", offerSchema);
