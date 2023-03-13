const mongoose=require("mongoose");
const Joi=require("joi");


const dealClientSchema=new mongoose.Schema({
    name_worker:String,
    time:{
        type:Date,default:Date.now
    },
    sum:Number,
    productandamount:String,
    total_price:Number
})

exports.dealClientModel=mongoose.model("dealClients",dealClientSchema);


exports.ValidDealclient=(reqBody)=>{
    let joiSchema=Joi.object({
        name_worker:Joi.string().alphanum().min(2).max(30).require(),
        sum:Joi.number().min(1).max(100).required(),
        productandamount:Joi.string().min(2).max(150).required(),
        total_price:Joi.number().min(0).max(99999999).required()
    })
}
