const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const workerSchema = new mongoose.Schema({
    name: String,
    email: String,
    img_profil: String,
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
    }
})
exports.workerModel = mongoose.model("workers", workerSchema);

const createWorkerSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    age: Joi.number().min(16).max(120).required(),
    gender: Joi.string().min(2).max(15).required(),
    phone_number: Joi.string().required(),
    address: Joi.string().min(3).max(150).required(),
    salary: Joi.number().min(29.12).max(500),
});

const updateWorkerSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    age: Joi.number().min(16).max(120),
    gender: Joi.string().min(2).max(15),
    phone_number: Joi.string(),
    address: Joi.string().min(3).max(150),
    salary: Joi.number().min(29.12).max(500),
}).min(1);

// const updateWorkerSchema = createWorkerSchema.fork(Object.keys(createWorkerSchema.describe().keys),key=>{
//     Joi.when(Joi.required(), { then: Joi.optional()})
// })

exports.validateWorker = (reqBody) => {
    return createWorkerSchema.validate(reqBody);
}

exports.validateUpdateWorker = (reqBody) => {
    return updateWorkerSchema.validate(reqBody);
}