import express from 'express';
import { authGuard } from "../middlewares/auth"
import bcrypt from "bcrypt"
import { UserModel, createToken, ValidUser } from "../models/userModel"
import { createUser } from "../controllers/user.controller"
const router = express.Router();

// CREATE USER 
router.post("/", createUser)






export default router