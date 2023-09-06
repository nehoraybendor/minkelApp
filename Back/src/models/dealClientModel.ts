import mongoose from "mongoose";
import Joi, { string } from "joi";


const dealClientSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now()
    },
    price: Number,
    product_name: String,
    amount: Number,
    created_by: {
        type: String,
        ref: 'users'
    }
})

export const dealClientModel = mongoose.model("dealClients", dealClientSchema);


export const validateDClient = (reqBody: any, allOptional?: boolean) => {
    let joiSchema = Joi.object({
        price: Joi.number().min(1).max(999999),
        product_name: Joi.string().min(2).max(150),
        amount: Joi.number().min(1).max(15000),
    }).options(allOptional ? {} : { presence: "required" })
    return joiSchema.validate(reqBody);
}
