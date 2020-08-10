const express = require("express");
const router = express.Router();

const photographs = require("../usecases/photograper");
const photograph = require("../models/photograper");
const authPhotograph = require("../middlewares/authPhothograph");

router.get("/", async (req, res) => {
  try {
    const allPhotographs = await photographs.getAll();
    response.json({
      succes: true,
      data: {
        photographs: allPhotographs,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

router.get("/id", async (res, req) => {
  try {
    const pothographId = req.params.pothographId;
    const photograph = await photographs.getById(pothographId);
    res.json({
      succes: true,
      data: {
        photograph,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

router.patch("/id", authPhotograph, async (res, req) => {
  try {
    const idPhotograph = req.params.id;
    const dataUpdate = request.body;
    const photographUpdate = await photographs.update(idPhotograph, dataUpdate);
    res.json({
      succes: true,
      data: {
        photographUpdate,
      },
    });
  } catch (error) {
    res.status(400);
    res.json({
      succes: false,
      error: error.message,
    });
  }
});

router.delete('/id,'authPhotograph,async(res,req)=>{
  try {
    const idPhotograph=req.params.id
    const photographDelete =await photographs.deletee(idPhotograph)
    res.json({
      succes:true,
      data :{
        photographDelete
      },
      message : ('Se eliminó correctamente')
    })
  } catch (error) {
    res.status(400)
    res.json({
      succes:false,
      error : error.message
    })
  }
})

module.exports = router;