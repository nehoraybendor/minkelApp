import { authGuard } from "../middlewares/auth";
import { Router } from "express"
import { createGoal, deleteGoal, findGoals, findeCompletedGoals, toggleGoal } from "../controllers/goals.controller"
const router = Router();

router
    .get("/", authGuard, findGoals)
    .get("/completed", authGuard, findeCompletedGoals)
    .post('/', authGuard, createGoal)
    .delete("/:goalId", authGuard, deleteGoal)
    .patch("/toggle/:goalId",authGuard,toggleGoal)
export default router 