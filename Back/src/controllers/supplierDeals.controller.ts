import { RequestHandler } from "express"
import { dealSupplierModel, validateDSupplier } from "../models/dealSupplierModel"

export const findeSDeals: RequestHandler = async ({ tokenData }, res, next) => {
    try {
        const deals = await dealSupplierModel.find({ created_by: tokenData.sub });
        res.status(200).json(deals)
    } catch (error) {
        next(error)
    }
}
export const createSDeal: RequestHandler = async ({body,tokenData}, res) => {
    const {error,value} = validateDSupplier(body);
    if(error) throw error
    try {
        const deal = new dealSupplierModel({...body,});
      
        await deal.save();
        res.status(201).json(deal);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
