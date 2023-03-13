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

exports.dealsSupplierModel=mongoose.model("dealsSuppliers",dealSchema);


exports.ValidDealssupplier=(reqBody)=>{
    let joiSchema=Joi.object({
        name_supplier:Joi.string().alphanum().min(2).max(30).require(),
        sum:Joi.number().min(1).max(100).required(),
        nameProducts:Joi.string().min(2).max(150).required(),
        price:Joi.number().min(0).max(99999999).required()
    })
}
