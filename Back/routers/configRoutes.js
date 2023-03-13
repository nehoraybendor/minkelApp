const usersR = require("./users");



exports.routesInit=(app)=>{
    
    
    app.use("/users",usersR);

    app.use("*",(req,res)=>{
        res.status(404).json({msg:"Not found",error:404});
    })
    
}