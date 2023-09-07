import mongoose from "mongoose";
import Joi, { string } from "joi";

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    created_by: {
        type: String,
        ref: 'users'
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: (new Date(Date.now() + 2 * 60 * 60 * 1000))
    },
})

export const goalModel = mongoose.model("goals", goalSchema);


export const validateGoal = (reqBody:any,AllOptional?:boolean ) => {
    let joiSchema = Joi.object({
        title: Joi.string().min(2).max(255),
        description: Joi.string().min(2).max(1000),
    });
    return joiSchema.options(AllOptional?{}:{presence:"required"}).validate(reqBody);
}
