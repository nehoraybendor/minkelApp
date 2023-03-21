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
    user_id:String,
    gender:String,
    phone_number:String,
    address:String,
    salary:{
        type:Number,default:29.12
    }
})
exports.workerModel=mongoose.model("workers",workerSchema);


exports.Validworker=(reqBody)=>{
    let joiSchema=Joi.object({
        name:Joi.string().alphanum().min(2).max(30).required(),
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:Joi.string().min(3).max(150).required(),
        age:Joi.number().min(16).max(120).required(),
        gender:Joi.string().min(2).max(15).required(),
        phone_number:Joi.string().required(),
        address:Joi.string().min(3).max(150).required(),
        salary:Joi.number().min(29.12).max(500),
    });
    return joiSchema.validate(reqBody);
}
