const mongoose=require("mongoose");
const Joi=require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const workerSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,default:"user"
    },
    img_profil:String,
    date_created:{
        type:Date,default:Date.now
    },
    age:Number,
    gender:String,
    phone_number:String,
    address:String,
    salary:Number
})
exports.workerModel=mongoose.model("workers",workerSchema);

exports.createToken = (worker_id) => {
    let token = jwt.sign({_id:worker_id},config.tokenSecret,{expiresIn:"600mins"});
    return token;
  }
exports.Validworker=(reqBody)=>{
    let joiSchema=Joi.object({
        name:Joi.string().alphanum().min(2).max(30).require,
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:Joi.string().min(3).max(150).required(),
        age:Joi.number().min(16).max(120).required(),
        gender:Joi.string().min(2).max(3).required(),
        phone_number:Joi.string().require(),
        address:Joi.string().min(3).max(150).required(),
        salary:Joi.number().min(29.12).max(500),
    })
}
exports.ValidLogin=(reqBody)=>{
    let joiSchema=Joi.object({
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:Joi.string().min(3).max(150).required()})
    return joiSchema.validate(reqBody);
}