const mongoose=require("mongoose");
const Joi=require("joi");


const dealClientSchema=new mongoose.Schema({
    name_worker:String,
    time:{
        type:Date,default:Date.now
    },
    sum:Number,
    product:String,
    amount:Number,
    total_price:Number
})

exports.dealClientModel=mongoose.model("dealClients",dealClientSchema);


exports.ValidDealclient=(reqBody)=>{
    let joiSchema=Joi.object({
        name_worker:Joi.string().alphanum().min(2).max(30).required(),
        sum:Joi.number().min(1).max(999999).required(),
        product:Joi.string().min(2).max(150).required(),
        amount:Joi.number().min(1).max(15000).required(),
        total_price:Joi.number().min(0).max(99999999).required()
    })
    return joiSchema.validate(reqBody);
}
exports.ValidDealUpdate=(reqBody)=>{
    let joiSchema=Joi.object({
        name_worker:Joi.string().alphanum().min(2).max(30).allow(),
        sum:Joi.number().min(1).max(999999).allow(),
        product:Joi.string().min(2).max(150).required(),
        amount:Joi.number().min(1).max(15000).required(),
        total_price:Joi.number().min(0).max(99999999).allow()
    })
return joiSchema.validate(reqBody);
}
