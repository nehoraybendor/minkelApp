import mongoose, { Types } from 'mongoose';
import Joi from "joi";



const dealsSupplierSchema = new mongoose.Schema({

    supplier_name: String,
    ordered_at: {
        type: Date,
        default: Date.now()
    },
    price: Number,
    amount: Number,
    product_name: String,
    created_by: {
        type: String,
        ref: 'users'
    }
})

export const dealSupplierModel = mongoose.model("dealsSuppliers", dealsSupplierSchema);



export const validateDSupplier = (body: any, allOptional?: boolean) => {
    let joiSchema = Joi.object({
        supplier_name: Joi.string().min(2).max(30),
        price: Joi.number().min(1).max(150000),
        product_name: Joi.string().min(2).max(150),
        amount: Joi.number().min(1).max(15000),
    }).options(allOptional ? {} : { presence: "required" })
    return joiSchema.validate(body);
}

