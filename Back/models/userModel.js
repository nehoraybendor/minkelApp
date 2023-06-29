const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String, default: "user"
    },
    img_profil: String,
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
exports.UserModel = mongoose.model("users", userSchema);

exports.createToken = (user_id) => {
    console.log(process.env.TOKENSECRET)
    let token = jwt.sign({ _id: user_id }, process.env.TOKENSECRET, { expiresIn: "600mins" });
    return token;
}
exports.ValidUser = (reqBody) => {
    let joiSchema = Joi.object({
        name: Joi.string().alphanum().min(2).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().min(3).max(150).required(),
        age: Joi.number().min(16).max(120).required(),
        gender: Joi.string().min(2).max(3).required()
    })
    return joiSchema.validate(reqBody);
}
exports.ValidLogin = (reqBody) => {
    let joiSchema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().min(3).max(150).required()
    })
    return joiSchema.validate(reqBody);
}