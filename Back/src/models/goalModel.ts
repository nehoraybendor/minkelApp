import mongoose from "mongoose";
import Joi from "joi";

const goalSchema = new mongoose.Schema({

    //  להוסיף ID 
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
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
    isActive: {
        type: Boolean,
        default: true
    }
})

export const goalModel = mongoose.model("goals", goalSchema);


export const validateGoal = (reqBody:any,AllOptional?:boolean ) => {
    let joiSchema = Joi.object({
        date: Joi.string(),
        time: Joi.string(),
        title: Joi.string().min(2).max(255),
        description: Joi.string().min(2).max(1000),
        user_id: Joi.string()
    });
    return joiSchema.options(AllOptional?{}:{presence:"required"}).validate(reqBody);
}
