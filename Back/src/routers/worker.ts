import { Router } from "express"
import { validateUpdateWorker, validateWorker, workerModel } from "../models/workerModel"
import { AuthedRequset, authGuard as auth } from "../middlewares/auth"
import { createWorker, deleteWorker, editWorker, findWorkers } from "../controllers/worker.controller"
const router = Router()


router
  .get('/:id', auth, findWorkers)
  .post('/', auth, createWorker)
  .patch('/:id', auth, editWorker)
  .delete('/:id', auth, deleteWorker)
export default router;