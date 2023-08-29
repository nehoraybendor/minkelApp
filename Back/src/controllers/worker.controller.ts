import type { RequestHandler } from "express"
import { validateUpdateWorker, validateWorker, workerModel } from "../models/workerModel"


export const findWorkers: RequestHandler = async (req, res) => {
    try {
        const id = req.params?.id
        const workers = await workerModel.find(id ? { _id: id } : {});
        res.status(200).json({ workers })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
export const createWorker: RequestHandler = async (req, res) => {
    try {
        // ! const result = req.file //??
        // console.log(result)
        const workerObj = req.body;
        workerObj.user_id = req.tokenData._id;
        const validWorker = validateWorker(workerObj);
        if (validWorker.error) {
            return res.status(400).json({ error: validWorker.error.details[0].message })
        }
        const worker = await workerModel.create(workerObj);
        res.status(200).json({ worker })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const editWorker: RequestHandler = async (req, res) => {
    try {
        const workerObj = req.body;
        workerObj.user_id = req.tokenData._id;
        const validWorker = validateUpdateWorker(workerObj)
        if (validWorker.error) {
            return res.status(400).json({ error: validWorker.error.details[0].message })
        }

        const updatedWorker = await workerModel.findByIdAndUpdate(req.params.id, workerObj);
        if (!updatedWorker) {
            return res.status(404).json({ message: "Worker not found" });
        }

        res.status(200).json(workerObj);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
export const deleteWorker: RequestHandler = async (req, res) => {
    try {
        const worker = await workerModel.findByIdAndDelete({ _id: req.params.id, user_id: req.tokenData._id })
        if (!worker) {
            return res.status(404).json({ message: "Worker not found or you do not have permission" });
        }

        res.status(200).json({ message: "Worker deleted", worker });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
