import { RequestHandler } from "express"
import { validateGoal, goalModel } from "../models/goalModel";
import { UserModel } from "../models/userModel";

export const findGoals: RequestHandler = async (req, res) => {
    try {
        
        const todo = await goalModel.find({ user_id: req.tokenData._id, isActive: true })
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
}
export const findeAchivedGoals: RequestHandler = async (req, res) => {
    try {
        const goals = await goalModel.find({ user_id: req.tokenData._id, isActive: false }).sort({ date: -1 });
        if (!goals.length) {
            return res.status(404).json({ err_msg: "No goals found in archive" });
        }
        res.json(goals);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ err_msg: error });
    }
}
export const createGoal: RequestHandler = async (req, res) => {
    const goalObj = req.body;
    goalObj.user_id = req.tokenData._id;
    let validBody = validateGoal(goalObj);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let goal = new goalModel(goalObj);
        let user = await UserModel.findById(req.tokenData.sub);
        user.goals.push(goal.id);
        await user.save()
        await goal.save()
        res.status(201).json(goal)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to save goal to database' });
    }
}

export const deleteGoal: RequestHandler = async (req, res) => {
    try {
        const goal = await goalModel.findById(req.params.id);
        if (!goal) {
            return res.status(404).json({ err_msg: "No goal found" });
        }
        const data = await goalModel.deleteOne({ _id: req.params.id, user_id: req.tokenData._id })
        if (data.deletedCount === 0) {
            return res.status(403).json({ err_msg: "Something wrong" });
        }
        return res.json({ msg: "goal deleted" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }
}

