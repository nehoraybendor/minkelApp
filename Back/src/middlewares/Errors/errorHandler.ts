import { ErrorRequestHandler } from "express"
import { HTTPException } from "./HTTPException"
import HttpStatusCode from "./httpStatusCode"
import { ValidationError } from "joi"
import {Error } from "mongoose"

export const mainErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);

    if (err instanceof HTTPException) {
        return res.status(err.statusCode).json({
            error: {
                ...err
            }
        })
    } else if (err instanceof ValidationError) {
        res.status(400).json(process.env.NODE_ENV === 'development' ? { error: err.details } : {})
    } else if (err instanceof Error.CastError ) {
        res.status(400).json({error:"invalid id passed at parameter /:id"})

    } else {
        res.status(500).json({
            error: {
                status: HttpStatusCode[500],
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: process.env.NODE_ENV === 'development' ? err.message : undefined
            }
        })
    }
}
