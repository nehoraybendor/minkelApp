const mongoose=require("mongoose");
const Joi=require("joi");


const goalSchema=new mongoose.Schema({
    date: {
        type: Date,
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
        type:Boolean,
      default:true
    }
})

exports.goalModel=mongoose.model("goals",goalSchema);


exports.ValidGoal=(reqBody)=>{
    let joiSchema = Joi.object({
        date: Joi.date().required(),
        time: Joi.string().required(),
        title: Joi.string().min(2).max(255).required(),
        description: Joi.string().min(2).max(1000).required(),
        user_id:Joi.string().required()
    });
    return joiSchema.validate(reqBody);
}
exports.validateGoalUpdate = (reqBody) => {
    let joiSchema = Joi.object({
        date: Joi.date().allow(),
        time: Joi.string().allow(),
        title: Joi.string().min(2).max(255).allow(),
        description: Joi.string().min(2).max(1000).allow()
    });
    return joiSchema.validate(reqBody);
}