const usersR = require("./users");
const workerR = require("./worker");
const goalR=require("./goals");
const dealClient=require("./dealsClient");
const dealSupplier=require("./dealSupplier");

exports.routesInit=(app)=>{
    
    
    app.use("/users",usersR);
    app.use("/workers",workerR);
    app.use("/goals",goalR);
    app.use("/dealClient",dealClient);
    app.use("/dealSupplier",dealSupplier);
    app.use("*",(req,res)=>{
        res.status(404).json({msg:"Not found",error:404});
    })
    
}