const mongoose=require("mongoose");
const Joi=require("joi");


const dealsSupplierSchema=new mongoose.Schema({
    name_supplier:String,
    time:{
        type:Date,default:Date.now
    },
    sum:Number,
    nameProducts:String,
    price:Number
})

exports.dealsSupplierModel=mongoose.model("dealsSuppliers",dealsSupplierSchema);


exports.ValidDealssupplier=(reqBody)=>{
    let joiSchema=Joi.object({
        name_supplier:Joi.string().alphanum().min(2).max(30).require(),
        sum:Joi.number().min(1).max(999999).required(),
        nameProducts:Joi.string().min(2).max(150).required(),
        price:Joi.number().min(0).max(99999999).required()
    })
    return joiSchema.validate(reqBody);
}
exports.ValidDealssupplierUpdate=(reqBody)=>{
    let joiSchema=Joi.object({
        name_supplier:Joi.string().alphanum().min(2).max(30).allow(),
        sum:Joi.number().min(1).max(999999).allow(),
        nameProducts:Joi.string().min(2).max(150).allow(),
        price:Joi.number().min(0).max(99999999).allow()
    })
return joiSchema.validate(reqBody);
}
