const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const extractTokenFromHeaders = (req) => {
  const [type, token] = req.header("Authorization").split(" ") ?? [];
 
  return type === "Bearer" ? token : undefined;
}

   

exports.auth = (req, res, next) => {
  const token = extractTokenFromHeaders(req)
  if (!token) {
    return res.status(401).json({ msg: "You need to send token to this endpoint" })
  }
  try {

    let decodeToken = jwt.verify(token, config.tokenSecret)
    req.tokenData = decodeToken;
    next()
  }
  catch (err) {
    return res.status(401).json({ msg: "Token invalid or expired" })
  }
}
// exports.authAdmin = (req,res,next) => {
//     let token = req.header("x-api-key");
//     if(!token){
//       return res.status(401).json({msg:"you must send token to this endpoint"})
//     }
//     try{
//       let decodeToken = jwt.verify(token,config.tokenSecret);
//       if(decodeToken.role != "admin"){
//         return res.status(401).json({msg:"You must send token of admin to this endpoint"})
//       }
//       req.tokenData = decodeToken;
//       next()
//     }
//     catch(err){
//       return res.status(401).json({msg:"Token invalid or expired"})
//     }}