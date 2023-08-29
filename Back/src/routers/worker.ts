import { Router } from "express"
import {  validateWorker, workerModel } from "../models/workerModel"
import { AuthedRequset, authGuard as auth } from "../middlewares/auth"
import { createWorker, deleteWorker, editWorker, findUnique, findWorkers } from "../controllers/worker.controller"
const router = Router()


router
  .get('/', auth, findWorkers)
  .get('/:id', auth, findUnique)
  .post('/', auth, createWorker)
  .patch('/:id', auth, editWorker)
  .delete('/:id', auth, deleteWorker)
export default router;