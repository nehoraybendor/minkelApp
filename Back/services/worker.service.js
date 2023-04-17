const { workerModel, validateWorker, validateUpdateWorker } = require("../models/workerModel");

exports.getAllWorkers = async (id) => {
    try {
        
        const workers = await workerModel.find(id?{_id: id}:{});
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
        
        const validWorker = validateUpdateWorker(body)
        if (validWorker.error) throw validWorker.error;
        const updatedWorker = await workerModel.updateOne({ _id: id_ }, { ...body },{new:true});
        console.log(updatedWorker);
        return updatedWorker;

    } catch (error) {
        throw error;
    }
}

// workerModel.remove({_id: id})

