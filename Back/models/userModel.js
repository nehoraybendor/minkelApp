const mongoose=require("mongoose");
const Joi=require("joi");



const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,default:"admin"
    }
    img_profil:,
    date_created:{
        type:Date,default:Date.now
    },
    age:Number,
    gender:String
})

exports.UserModel=mongoose.model("users",userSchema);

exports.ValidUser=(reqBody)=>{
    let joiSchema=Joi.object({
        name:Joi.string().alphanum().min(2).max(30).require,
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    })
}