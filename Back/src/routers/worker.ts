import { Router } from "express"
import { validateUpdateWorker, validateWorker, workerModel } from "../models/workerModel"
import {AuthedRequset,authGuard as auth} from "../middlewares/auth"
const router = Router()
router.get("/", async (req, res) => {
  res.json({ msg: "Router work" });
})
router.get('/list', auth, async (req, res) => {
  try {
    const workers = await workerModel.find({});
    res.status(200).json({ workers })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const worker = await workerModel.findById(req.params.id)
    if (!worker) {
      return res.status(404).json({ message: "Worker not found" });
    }
    res.status(200).json({ worker })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    // ! const result = req.file //??
    // console.log(result)
    
    const workerObj = req.body;
    workerObj.user_id = req.tokenData._id;
    const validWorker = validateWorker(workerObj);
    if (validWorker.error) {
      return res.status(400).json({ error: validWorker.error.details[0].message })
    }

    const worker = await workerModel.create(workerObj);
    res.status(200).json({ worker })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
  
router.patch('/:id', auth, async (req, res) => {
  try {
   
    const workerObj = req.body;
    workerObj.user_id = req.tokenData._id;
    const validWorker = validateUpdateWorker(workerObj)
    if (validWorker.error) {
      return res.status(400).json({ error: validWorker.error.details[0].message })
    }

    const updatedWorker = await workerModel.findByIdAndUpdate(req.params.id, workerObj);
    if (!updatedWorker) {
      return res.status(404).json({ message: "Worker not found" });
    }

    res.status(200).json(workerObj);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    const worker = await workerModel.findByIdAndDelete({ _id: req.params.id, user_id: req.tokenData._id })
    if (!worker) {
      return res.status(404).json({ message: "Worker not found or you do not have permission" });
    }

    res.status(200).json({ message: "Worker deleted", worker });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router;