const usersR = require("./users");
const workerR = require("./worker");
const goalR=require("./goals");

exports.routesInit=(app)=>{
    
    
    app.use("/users",usersR);
    app.use("/workers",workerR);
    app.use("/goals",goalR);
    app.use("*",(req,res)=>{
        res.status(404).json({msg:"Not found",error:404});
    })
    
}