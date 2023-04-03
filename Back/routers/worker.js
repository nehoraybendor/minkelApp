const express = require("express");
const { getAllWorkers, addWorker } = require("../services/worker.service");
const router = express.Router();

//? CRUD

// baseurl/workers/
// * Read
router.get('/', async (req, res) => {
  try {
    const response = await getAllWorkers()
    res.status(200).json({response})
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const response = await addWorker(req.body)
    res.status(200).json({response})
  } catch (error) {
    res.json({error})
  }
})


module.exports = router;