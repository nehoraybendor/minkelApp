import mongoose, { Types } from 'mongoose';
import Joi from "joi";



const dealsSupplierSchema = new mongoose.Schema({
    _id: { type: Types.ObjectId, default: new Types.ObjectId() },
    name_supplier: String,
    time: {
        type: Date, default: Date.now
    },
    price: Number,
    amount: Number,
    nameProducts: String,
    total_price: Number,
    created_by: {
        type: Types.ObjectId,
        ref: 'users'
    }
})

export const dealSupplierModel = mongoose.model("dealsSuppliers", dealsSupplierSchema);

export const validateDSupplier = (body: any, allOptional?: boolean) => {
    let joiSchema = Joi.object({
        name_supplier: Joi.string().min(2).max(30),
        price: Joi.number().min(1).max(150000),
        nameProducts: Joi.string().min(2).max(150),
        amount: Joi.number().min(1).max(15000),
        total_price: Joi.number().min(0).max(99999999),
    }).options(allOptional ? {} : { presence: "required" })
    return joiSchema.validate(body);
}

