import { RequestHandler } from "express"
import { validateGoal, goalModel } from "../models/goalModel";
import { HTTPException } from "../middlewares/Errors/HTTPException";


export const findGoals: RequestHandler = async ({ tokenData }, res, next) => {
    try {
        const todo = await goalModel.find({ $and: [{ created_by: tokenData.sub }, { isCompleted: false }] })
        res.status(200).json(todo);
    } catch (error) {
        next(error)
    }
}
export const findeCompletedGoals: RequestHandler = async ({ tokenData }, res, next) => {
    try {
        const goals = await goalModel.find({ $and: [{ created_by: tokenData.sub }, { isCompleted: true }] });
        res.status(200).json(goals);
    } catch (error) {
        next(error)
    }
}
export const createGoal: RequestHandler = async ({ body, tokenData }, res, next) => {
    try {
        const { error, value } = validateGoal(body);
        if (error) throw error;
        const goal = await goalModel.create({ created_by: tokenData.sub, ...body })
        res.status(201).json(goal)
    } catch (error) {
        next(error)
    }
}

export const deleteGoal: RequestHandler = async ({ params, tokenData }, res, next) => {
    try {
        const deletedGoal = await goalModel.findOneAndDelete({
            $and: [
                { created_by: tokenData.sub }, { _id: params.goalId }
            ]
        })
        if (!deletedGoal) throw new HTTPException(404, "goal not found")
        res.status(200).json({ msg: "deleted successfuly!", deletedGoal })
    } catch (error) {
        next(error)
    }
}

export const toggleGoal: RequestHandler = async ({ params, tokenData }, res, next) => {
    try {
        console.log(params.goalId);

        const toUpdateGoal = await goalModel.findOne({
            $and: [
                { created_by: tokenData.sub }, { _id: params.goalId }
            ]
        }
        )
        if (!toUpdateGoal) throw new HTTPException(404, "goal not found")
        toUpdateGoal.isCompleted = !toUpdateGoal.isCompleted;
        const updatedGoal = await toUpdateGoal.save()
        res.status(200).json(updatedGoal)
    } catch (error) {
        next(error)
    }
}

