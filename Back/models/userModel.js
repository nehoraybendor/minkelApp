const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const userSchema = new mongoose.Schema({
    uid: String,
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
        uid: Joi.string(),
        age: Joi.number().min(18).max(120).required(),
        gender: Joi.string().required().valid('MALE','FEMALE','OTHER'),
    })
    return joiSchema.validate(reqBody);
}
