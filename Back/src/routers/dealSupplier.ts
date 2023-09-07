import { Router } from "express";
import { authGuard } from "../middlewares/auth"
import { createSDeal, deletSDeal, editSDeal, findeSDeals, } from "../controllers/supplierDeals.controller"

const router = Router()
  .get("/", authGuard, findeSDeals)
  .post("/", authGuard, createSDeal)
  .patch("/:dealId", authGuard, editSDeal)
  .delete("/:dealId", authGuard, deletSDeal)
export default router;
