const mongoose=require("mongoose");
const Joi=require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,default:"admin"
    },
    img_profil:String,
    date_created:{
        type:Date,default:Date.now
    },
    age:Number,
    gender:String
})
exports.UserModel=mongoose.model("users",userSchema);

exports.createToken = (user_id) => {
    let token = jwt.sign({_id:user_id},config.tokenSecret,{expiresIn:"600mins"});
    return token;
  }
exports.ValidUser=(reqBody)=>{
    let joiSchema=Joi.object({
        name:Joi.string().alphanum().min(2).max(30).require,
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:Joi.string().min(3).max(150).required(),
        age:Joi.number().min(2).max(3).required(),
        gender:Joi.string().min(2).max(3).required()
    })
}
exports.ValidLogin=(reqBody)=>{
    let joiSchema=Joi.object({
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:Joi.string().min(3).max(150).required()})
    return joiSchema.validate(reqBody);
}