const express = require("express");
const { getAllWorkers, addWorker } = require("../services/worker.service");
const { getAllWorkers, addWorker, editWorker } = require("../services/worker.service");
const Joi = require("joi");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await getAllWorkers()
    res.status(200).json({ response })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const response = await getAllWorkers(req.params.id)
    res.status(200).json({ response })
  } catch (error) {
    res.json({ error })
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
    res.status(200).json({response})
  } catch (error) {
    if (error.details) {
      res.status(400).json({ error: error.details })
    } else {
      res.status(500).json({ error })
    }
  }
})


router.delete('/:id', async (req ,res) => {
  try {
    const response = await UserModel.deleteOne({_id:req.params.id});
    res.json(response);
  } catch (error) {
    if (error.details) {
      res.status(400).json({ error: error.details })
    } else {
      res.status(500).json({ error })
    }
  }
})


module.exports = router;