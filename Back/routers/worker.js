const express = require("express");
const { getAllWorkers, addWorker, editWorker } = require("../services/worker.service");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const { workerModel } = require("../models/workerModel");

router.get("/", async(req,res) => {
  res.json({msg:"Router work"});
})

router.get('/list', async (req, res) => {
  try {
    const response = await getAllWorkers()
    res.status(200).json({ response })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/:id', async (req, res) => {
  
  try {
    const response = await workerModel.findById(req.params.id)
    if(!response){
      return res.status(404).json({ message: "worker not found" });
    }
    res.status(200).json({ response })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const response = await addWorker(req.body)
    res.status(200).json({ response })
  } catch (error) {
    if (error.details) {
      res.status(400).json({ error: error.details })
    } else {
      res.status(500).json({ error })
    }
  }
})


router.patch('/:id', async (req, res) => {
  try {
    const response = await editWorker(req.params.id, req.body)
    res.status(200).json(req.body)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err_msg: error.details });
}
})


router.delete('/:id', async (req ,res) => {
  let id=req.params.id;
  try {
    const worker = await workerModel.findByIdAndDelete({_id:id});
    if(!worker){
      return res.status(404).json({ error: "Worker not found" });
    }
    res.json(worker);
  } catch (error) {
    if (error.details) {
      res.status(400).json({ error: error.details })
    } else {
      res.status(500).json({ error })
    }
  }
})


module.exports = router;