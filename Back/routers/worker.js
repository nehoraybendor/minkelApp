const express= require("express");
const { workerModel, Validworker } = require("../models/workerModel");
const router = express.Router();



router.get("/", async(req,res) => {
    try {
        let data = await workerModel
        .find({})
          //.find({ user_id: req.tokenData._id })
        res.json(data);
      }
      catch (err) {
        console.log(err)
        res.status(500).json(err)
      }
})

router.post("/", async(req,res) => {
    let validBody = Validworker(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
      }
      try {
        let worker = new workerModel(req.body);
        //worker.user_id = req.tokenData._id;
        await worker.save();
        res.status(201).json(worker);
      }
      catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})


module.exports = router;