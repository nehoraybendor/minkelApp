import { RequestHandler } from "express";
import { UserModel, ValidUser } from "../models/userModel";
import fbAdmin from "firebase-admin"
import { HTTPException } from "../middlewares/Errors/HTTPException";

export const createUser: RequestHandler = async ({ body }, res, next) => {
    let { value, error } = ValidUser(body);
    if (error) throw error
    try {
        const user = await UserModel.create(value);
        fbAdmin.auth().setCustomUserClaims(user.uid, { fullName: user.fullName })

        res.status(201).json({ msg: 'User created successfully', user })

    } catch (error) {
        if (error.code == 11000) {
            next(new HTTPException(409, "user alredy exist"))
        } else next(error)
    }
}
