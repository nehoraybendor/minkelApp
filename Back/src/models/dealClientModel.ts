import mongoose from "mongoose";
import Joi from "joi";


const dealClientSchema = new mongoose.Schema({
    time: {
        type: Date, default: Date.now
    },
    sum: Number,
    product: String,
    amount: Number,
    total_price: Number,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

export const dealClientModel = mongoose.model("dealClients", dealClientSchema);


export const ValidDealclient = (reqBody) => {
    let joiSchema = Joi.object({
        sum: Joi.number().min(1).max(999999).required(),
        product: Joi.string().min(2).max(150).required(),
        amount: Joi.number().min(1).max(15000).required(),
        total_price: Joi.number().min(0).max(99999999),
        user_id: Joi.string().required()
    })
    return joiSchema.validate(reqBody);
}
export const ValidDealUpdate = (reqBody) => {
    let joiSchema = Joi.object({
        sum: Joi.number().min(1).max(999999).allow(),
        product: Joi.string().min(2).max(150).required(),
        amount: Joi.number().min(1).max(15000).required(),
        total_price: Joi.number().min(0).max(99999999).allow()
    })
    return joiSchema.validate(reqBody);
}
