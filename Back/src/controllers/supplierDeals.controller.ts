import { RequestHandler } from "express"
import { dealSupplierModel, ValidDealssupplier, ValidDealssupplierUpdate } from "../models/dealSupplierModel"

export const findeSDeals: RequestHandler = async (req, res) => {
    try {
        const deals = await dealSupplierModel.find({ user_id: req.tokenData._id });
        res.json(deals);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
export const createSDeal: RequestHandler = async (req, res) => {
    const dealObj = req.body;
    dealObj.user_id = req.tokenData._id;
    const validBody = ValidDealssupplier(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }

    try {
        const deal = new dealSupplierModel(req.body);
        deal.total_price = deal.price * deal.amount;
        await deal.save();
        res.status(201).json(deal);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
}