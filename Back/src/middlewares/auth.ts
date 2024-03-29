import jwt from "jsonwebtoken"
import { auth } from "firebase-admin"
import type { RequestHandler, Request } from "express"

export interface AuthedRequset extends Request {
  tokenData: jwt.JwtPayload
}

const extractTokenFromHeaders = (req: Request) => {
  const [type, token] = req.headers.authorization?.split(" ") ?? [];



  
  return type === "Bearer" ? token : undefined;
}



export const authGuard: RequestHandler = async (req, res, next) => {
  const token = extractTokenFromHeaders(req)
  console.log(token);
  
  
  if (!token) {
    return res.status(401).json({ msg: "You need to send token to this endpoint" })
  }
  try {
    (req as AuthedRequset).tokenData = await auth().verifyIdToken(token)
    next()
    
  }
  catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Token invalid or expired" })
  }
};
