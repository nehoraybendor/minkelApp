const mongoose=require("mongoose");
const Joi=require("joi");


const dealsSupplierSchema=new mongoose.Schema({
    name_supplier:String,
    time:{
        type:Date,default:Date.now
    },
    price:Number,
    amount:Number,
    nameProducts:String,
    total_price:Number,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
      ref: 'users'}
})

exports.dealSupplierModel=mongoose.model("dealsSuppliers",dealsSupplierSchema);


exports.ValidDealssupplier=(reqBody)=>{
    let joiSchema=Joi.object({
        name_supplier:Joi.string().min(2).max(30).required(),
        price:Joi.number().min(1).max(150000).required(),
        nameProducts:Joi.string().min(2).max(150).required(),
        amount:Joi.number().min(1).max(15000).required(),
        total_price:Joi.number().min(0).max(99999999),
        user_id:Joi.string().required()
    })
    return joiSchema.validate(reqBody);
}
exports.ValidDealssupplierUpdate=(reqBody)=>{
    let joiSchema=Joi.object({
        name_supplier:Joi.string().min(2).max(30).allow(),
        price:Joi.number().min(1).max(999999).allow(),
        nameProducts:Joi.string().min(2).max(150).allow(),
        amount:Joi.number().min(1).max(15000).required(),
        total_price:Joi.number().min(0).max(99999999).allow()
    })
return joiSchema.validate(reqBody);
}
