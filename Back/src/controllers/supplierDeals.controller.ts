import { RequestHandler } from "express"
import { dealSupplierModel, validateDSupplier } from "../models/dealSupplierModel"
import { HTTPException } from "../middlewares/Errors/HTTPException";

export const findeSDeals: RequestHandler = async ({ tokenData }, res, next) => {
    try {
        const deals = await dealSupplierModel.find({ created_by: tokenData.sub });
        res.status(200).json(deals)
    } catch (error) {
        next(error)
    }
}

export const createSDeal: RequestHandler = async ({ body, tokenData }, res, next) => {
    try {
        const { error, value } = validateDSupplier(body);
        if (error) throw error
        const deal = new dealSupplierModel({ created_by: tokenData.sub, ...value });
        await deal.save();
        res.status(201).json(deal);
    } catch (error) {
        console.log(error);
        next(error)
    }
}
export const editSDeal: RequestHandler = async ({ body, tokenData, params }, res, next) => {
    try {
        const dealId = params.dealId
        const { error, value } = validateDSupplier(body);
        if (error) throw error
        const updatedDeal = await dealSupplierModel.findOneAndUpdate(
            { $and: [{ created_by: tokenData }, { _id: dealId }] },
            value,
            { new: true });
        if (!updatedDeal) throw new HTTPException(404, "deal not found")
        res.status(201).json(updatedDeal);
    } catch (error) {
        next(error)
    }
}

export const deletSDeal: RequestHandler = async ({ tokenData, params }, res, next) => {
    try {
        const dealId = params.dealId
        console.log(dealId);
        
        const deletedDeal = await dealSupplierModel.findOneAndDelete({ $and: [{ created_by: tokenData.sub }, { _id: dealId }] });
        if (!deletedDeal) throw new HTTPException(404, "deal not found")
        res.status(201).json(deletedDeal);
    } catch (error) {
        next(error)
    }
}