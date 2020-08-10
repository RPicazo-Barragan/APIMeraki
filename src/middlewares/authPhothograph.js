const jwt = require("../lib/jwt");
const Photograph = require("../models/photograper");

async function authPhotograph(req, res, next) {
  try {
    const authorization = req.headers;
    const decodedToken = jwt.verify(authorization);
    const photograph = await Photograph.findById(decodedToken.id);
    res.photograph = photograph;
    next();
  } catch (error) {
    res.json({
      succes: false,
      error: error.message,
    });
  }
}

module.exports = authPhotograph;
