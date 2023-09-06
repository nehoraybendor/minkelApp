import type { RequestHandler } from "express"
import { validateWorker, workerModel } from "../models/workerModel"
import { HTTPException } from "../middlewares/Errors/HTTPException";


export const findWorkers: RequestHandler = async (req, res, next) => {
    try {

        const workers = await workerModel.find({});
        res.status(200).json( workers )
    } catch (error) {
        next(error)
    }
}
export const findUnique: RequestHandler = async (req, res, next) => {
    try {
        const id = req.params?.id
        const workers = await workerModel.findOne({ _id: id });
        if (!workers) throw new HTTPException(404, "Workers not found")
        res.status(200).json( workers )
    } catch (error) {
        next(error)
    }
}
export const createWorker: RequestHandler = async (req, res, next) => {
    try {
        const { value, error } = validateWorker({ ...req.body });
        if (error) throw error;
        const worker = await workerModel.create(value);
        res.status(200).json( worker )
    } catch (error) {
        next(error)
    }
}

export const editWorker: RequestHandler = async ({ body, tokenData, params }, res, next) => {
    try {
        const { value, error } = validateWorker({ ...body }, true)
        if (error) throw error

        const updatedWorker = await workerModel.findOneAndUpdate({ _id: params.id }, value, { new: true });
        if (!updatedWorker) throw new HTTPException(404, "Workers not found")

        res.status(200).json(updatedWorker);
    } catch (error) {
        next(error)
    }
}
export const deleteWorker: RequestHandler = async (req, res, next) => {
    try {
        const deletedWorker = await workerModel.findByIdAndDelete({ _id: req.params.id, user_id: req.tokenData._id })
        if (!deletedWorker) throw new HTTPException(404, "Worker not found");

        res.status(200).json({ message: "Worker deleted", deletedWorker });
    } catch (error) {
        next(error)
    }
}
