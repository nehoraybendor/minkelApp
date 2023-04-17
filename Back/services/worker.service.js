const { workerModel, validateWorker } = require("../models/workerModel");

exports.getAllWorkers = async () => {
    try {
        const workers = await workerModel.find({});
        return workers;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.addWorker = async (body) => {
    try {
        const validWorker = validateWorker(body);
        if (validWorker.error) throw validWorker.error;
        const worker = await workerModel.create({ ...body })
        return worker;
    } catch (error) {
        
        throw error;
    }
};

exports.editWorker = async (id_, body) => {
    try {
        

    } catch (error) {

    }
}