import { RequestHandler } from "express"
import { validateDClient, dealClientModel } from "../models/dealClientModel"
import { HTTPException } from "../middlewares/Errors/HTTPException";

export const findCdeal: RequestHandler = async (req, res, next) => {
    try {
        const deals = await dealClientModel.find({ created_by: req.tokenData.sub });
        res.json(deals);
    } catch (error) {
        next(error)
    }
}


export const createCDeal: RequestHandler = async ({ body, tokenData }, res, next) => {
    try {
        const { value, error } = validateDClient(body);
        if (error) throw error;
        const deal = await dealClientModel.create({ created_by: tokenData.uid, ...value });
        res.status(201).json(deal);
    } catch (error) {
        next(error)
    }
}

export const editCDeal: RequestHandler = async ({ params, body, tokenData }, res, next) => {
    try {
        const dealId = params.dealId;
        const { error, value } = validateDClient(body, true);
        if (error) throw error;
        const updatedDeal = await dealClientModel.findOneAndUpdate(
            { $and: [{ _id: dealId }, { created_by: tokenData.uid }] },
            { $set: { ...body } },
            { new: true })
        if (!updatedDeal) throw new HTTPException(404, "deal not exist!")
        res.json(updatedDeal);
    } catch (error) {
        next(error)
    }
}

export const deleteCDeal: RequestHandler = async ({ params, tokenData }, res, next) => {
    try {
        const dealId = params.dealId;
        const deletedDeal = await dealClientModel.findOneAndDelete({ $and: [{ _id: dealId }, { created_by: tokenData.sub }] });

        if (!deletedDeal) throw new HTTPException(404, "deal not exist!");
        res.json(deletedDeal);
    } catch (error) {
        next(error)
    }
}