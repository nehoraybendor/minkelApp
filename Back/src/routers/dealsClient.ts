import { Router } from "express";
import { findCdeal, createCDeal, deleteCDeal, editCDeal, } from "../controllers/clientDeals.controllers"
const { UserModel } = require("../models/userModel")
import { authGuard } from "../middlewares/auth"
const router = Router()
  .get("/", authGuard, findCdeal)
  .post("/", authGuard, createCDeal)
  .patch("/:dealId", authGuard, editCDeal)
  .delete("/:dealId", authGuard, deleteCDeal);

export default router