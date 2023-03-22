const express= require("express");
const {goalModel,ValidGoal}=require("../models/goalModel");
const {auth, authAdmin} = require("../middlewares/auth");
const router= express.Router;