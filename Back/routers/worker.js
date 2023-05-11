const express = require("express");
const { getAllWorkers, addWorker, editWorker } = require("../services/worker.service");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const { workerModel } = require("../models/workerModel");

router.get("/", async(req,res) => {
  res.json({msg:"Router work"});
})

router.get('/list',auth, async (req, res) => {
  try {
    const response = await getAllWorkers()
    res.status(200).json({ response })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/:id',auth, async (req, res) => {
  
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

router.post('/',auth, async (req, res) => {
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


router.patch('/:id',auth, async (req, res) => {
  try {
    const response = await editWorker(req.params.id, req.body)
    res.status(200).json(req.body)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err_msg: error.details });
}
})


router.delete('/:id',auth, async (req ,res) => {
  let id=req.params.id;
  try {
    const worker =await workerModel.findById({_id:id,user_id:req.tokenData._id})
    if(!worker){
      return res.status(404).json({ error: "Worker not found" });
    }
    if(deal.user_id.toString() !== req.tokenData._id.toString()){
      return res.status(401).json({err:"You dont have permission to this deal"})
    }

    const workerdel = await workerModel.findByIdAndDelete({_id:id});
    res.json(workerdel);
  } catch (error) {
    if (error.details) {
      res.status(400).json({ error: error.details })
    } else {
      res.status(500).json({ error })
    }
  }
})


module.exports = router;