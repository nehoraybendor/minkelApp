import { RequestHandler } from "express";
import { UserModel, ValidUser } from "../models/userModel";
import fbAdmin from "firebase-admin"
export const createUser: RequestHandler = async (req, res) => {
    let validBody = ValidUser(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        const user = new UserModel(req.body);
        await user.save();
        fbAdmin.auth().setCustomUserClaims(user.uid, { fullName: user.fullName })

        res.status(201).json({ msg: 'User created successfully', user })

    } catch (error) {
        if (error.code == 11000) {
            return res.status(409).json({ msg: "user ALredy Exist  in system", code: 11000 })
        }
        console.log(error);
        res.status(500).json(error);
    }
}
