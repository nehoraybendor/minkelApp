const express= require("express");




const {UserModel} = require("../models/userModel");
const router = express.Router();


router.get("/", async(req,res) => {
  res.json({msg:"Users work"});
})




router.get("/myinfo",async(req,res)=>{
  try {
    let data=await UserModel.findOne({_id:req.tokenData._id},{password:0})
    res.json(data);
  
  } catch (error) {
    console.log(err)
    res.status(500).json(err)
  }
})
router.post("/",async(req,res)=>{
  let validBody=ValidUser(req.body);
  if(validBody.error){
   return res.status(400).json(validBody.error.details);
  }
  
})











module.exports = router;