const express= require("express");
const bcrypt =require("bcrypt");
const {auth, authAdmin} = require("../middlewares/auth");


const {UserModel, createToken,ValidUser,ValidLogin} = require("../models/userModel");
const router = express.Router();


router.get("/", async(req,res) => {
  res.json({msg:"Users work"});
})




router.get("/myinfo",auth,async(req,res)=>{
  try {
    let data=await UserModel.findOne({_id:req.tokenData._id},{password:0})
    res.json(data);
  
  } catch (error) {
    console.log(err)
    res.status(500).json(err)
  }
})
router.post("/",async(req,res)=>{
  console.log(req.body);
  let validBody=ValidUser(req.body);
  if(validBody.error){
   return res.status(400).json(validBody.error.details);
  }
  try {
    let user=new UserModel(req.body);
    user.password=await bcrypt.hash(user.password,10);
    await user.save();

    user.password="******";
    res.status(201).json(user)
  
  } catch (error) {
    if(err.code==11000){
      return res.status(401).json({msg:"Email already in system,try log in",code:11000})
    }
    console.log(err);
    res.status(500).json(err);
  }
})
router.post("/login",async(req,res)=>{
  let validBody = ValidLogin(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user=await UserModel.findOne({email:req.body.email})
    if(!user){
      return res.status(401).json({msg:"User or password not match,code:1"})
    }
    let passwordValid=await bcrypt.compare(req.body.password,user.password)
    if(!passwordValid){
      return res.status(401).json({msg:"User or password not match,code 2"})
    }
    let token=createToken(user._id);
    res.json({token:token});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
})
router.delete("/:idDel",auth,async(req,res)=>{
  let idDel=req.params.idDel;
  try {
    // let find=await UserModel.findOne({_id:req.tokenData._id},{password:0,_id:0,gender:0,email:0,img_profil:0})
    let data=await UserModel.deleteOne({_id:idDel});
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})



module.exports = router;