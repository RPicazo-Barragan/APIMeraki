const Photographs = require("../models/photograper");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

function getAll() {
  return Photographs.find();
}

function getById(photograperId) {
  return Photographs.findById(photograperId);
}

function create(photograperData) {
  return Photographs.create(photograperData);
}

function update(photograperId, photograperData) {
  return Photographs.findByIdAndUpdate(photograperId, photograperData);
}

function deletee(photograperId) {
  return Photographs.findByIdAndDelete(photograperId);
}

async function signup(photographData) {
  const { password } = photographData;
  const passwordEncripted = await bcrypt.hash(password);
  return Photographs.create({
    ...photographData,
    password: passwordEncripted,
  });
}

async function login(email, passwordPlain) {
  const photographByEmail = await Photographs.findOne({ email });
  if (!photographByEmail) {
    throw new Error("Datos incorrectos");
  }
  const isValid = await bcrypt.compare(
    passwordPlain,
    photographByEmail.password
  );
  if (!isValid) {
    throw new Error("Datos incorrectos");
  }
  return jwt.sign({ id: photographByEmail._id });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deletee,
  signup,
  login,
};
