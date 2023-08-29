const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const userSchema = new mongoose.Schema({
    uid: { 
        type: String,
        required: true
     },
    fullName: String,
    date_created: {
        type: Date, default: Date.now
    },
    age: Number,
    gender: String,
    goals: [{
        type: mongoose.Types.ObjectId,
        ref: 'goals'
    }]
})
export const UserModel = mongoose.model("users", userSchema);

export const createToken = (user_id) => {
    console.log(process.env.TOKENSECRET)
    let token = jwt.sign({ _id: user_id }, process.env.TOKENSECRET, { expiresIn: "600mins" });
    return token;
}
export const ValidUser = (reqBody) => {
    let joiSchema = Joi.object({
        uid: Joi.string(),
        fullName: Joi.string().min(1).max(30).required(),
        age: Joi.number().min(18).max(120).required(),
        gender: Joi.string().required().valid('MALE', 'FEMALE', 'OTHER'),
    })
    return joiSchema.validate(reqBody);
}
