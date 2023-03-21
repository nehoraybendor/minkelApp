const usersR = require("./users");
const workerR = require("./worker")


exports.routesInit=(app)=>{
    
    
    app.use("/users",usersR);
    app.use("/workers",workerR);

    app.use("*",(req,res)=>{
        res.status(404).json({msg:"Not found",error:404});
    })
    
}