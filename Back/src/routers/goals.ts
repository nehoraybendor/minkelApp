import { authGuard } from "../middlewares/auth";
import { Router } from "express"
import { createGoal, deleteGoal, findGoals, findeAchivedGoals } from "../controllers/goals.controllers"
const router = Router();

router
    .get("/", authGuard, findGoals)
    .get("/archive", authGuard, findeAchivedGoals)
    .post('/', authGuard, createGoal)
    .delete("/:id", authGuard, deleteGoal)
export default router 