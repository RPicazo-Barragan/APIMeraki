const mongoose = require("mongoose");

// schema for laboral offer
const offerSchema = new mongoose.Schema({
  clientid: {
    Number,
    required: true,
  },
  clientphotografh: {
    Number,
    required: true,
  },

  decription: {
    type: String,
    required: true,
    max: 30,
  },
  eventtype: {
    type: String,
    required: true,
  },
  eventadress: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  eventduration: {
    type: String,
    required: true,
  },
  postdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("offers", offerSchema);
