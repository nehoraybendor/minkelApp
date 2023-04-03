const { workerModel } = require("../models/workerModel");

exports.getAllWorkers = async () => {
    try {
        const workers = await workerModel.find({});
        return workers;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
