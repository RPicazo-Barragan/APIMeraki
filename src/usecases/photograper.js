const photograpers = require("../models/photograper");

function getAll() {
  return photograpers.find();
}

function getById(photograperId) {
  return photograpers.findById(photograperId);
}

function create(photograperData) {
  return photograpers.create(photograperData);
}

function update(photograperId, photograperData) {
  return photograpers.findByIdAndUpdate(photograperId, photograperData);
}

function deletee(photograperId) {
  return photograpers.findByIdAndDelete(photograperId);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deletee,
};
