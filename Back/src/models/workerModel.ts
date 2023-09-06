import mongoose, { Types } from 'mongoose';
import Joi, { required } from 'joi';

const workerSchema = new mongoose.Schema({
  
    name: String,
    email: String,
    profil_url: String,
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
    // user_id: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'users'
    // }

})
export const workerModel = mongoose.model("workers", workerSchema);

const validationSchema = Joi.object({
    name: Joi.string().min(2).max(30).regex(/^[0-9a-zA-Z ]*$/),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    profil_url: Joi.string().min(3).max(5000),
    age: Joi.number().min(16).max(120),
    gender: Joi.string().min(2).max(15),
    phone_number: Joi.string(),
    address: Joi.string().min(3).max(150),
    salary: Joi.number().min(29.12).max(70000).optional(),
    // user_id: Joi.string()
});

export const validateWorker = (reqBody: any, AllOptional?: boolean) => {
    return validationSchema.options(AllOptional ? {} : { presence: "required" }).validate(reqBody);
}

