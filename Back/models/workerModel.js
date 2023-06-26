const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const workerSchema = new mongoose.Schema({
    name: String,
    email: String,
    img_profil: {
        url:String,
        filename:String
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    age: Number,
    gender: String,
    phone_number: String,
    address: String,
    salary: {
        type: Number, default: 29.12
    },
    user_id: {
        type: mongoose.Types.ObjectId,
      ref: 'users'
    }

})
exports.workerModel = mongoose.model("workers", workerSchema);


const createWorkerSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    img_profil:Joi.string().min(3).max(5000).required(),
    age: Joi.number().min(16).max(120).required(),
    gender: Joi.string().min(2).max(15).required(),
    phone_number: Joi.string().required(),
    address: Joi.string().min(3).max(150).required(),
    salary: Joi.number().min(29.12).max(70000),
    user_id:Joi.string().required()
});

const updateWorkerSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    img_profil:Joi.string().min(3).max(5000),
    age: Joi.number().min(16).max(120),
    gender: Joi.string().min(2).max(15),
    phone_number: Joi.string(),
    address: Joi.string().min(3).max(150),
    salary: Joi.number().min(29.12).max(500),
    user_id:Joi.string().required()
}).min(1);

exports.validateWorker = (reqBody) => { 
    return createWorkerSchema.validate(reqBody);
}

exports.validateUpdateWorker = (reqBody) => {
    return updateWorkerSchema.validate(reqBody);
}