const mongoose=require("mongoose");
const Joi=require("joi");


const goalSchema=new mongoose.Schema({
   goal:String,
   time_create:{
        type:Date,default:Date.now
    },
   deadline_time:Date,
   status:String
})

exports.goalModel=mongoose.model("dealClients",dealClientSchema);


exports.ValidGoal=(reqBody)=>{
    let joiSchema=Joi.object({
        goal:Joi.string().min(2).max(200).require(),
        time_create:Joi.date().min(1).max(100),
        deadline_time:Joi.date().required(),
        status:Joi.string().min(0).max(99999999).required()
    })
}