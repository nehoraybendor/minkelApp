import userRouter  from "./users"
import workerRouter  from "./worker"
import goalR  from "./goals"
import dealClient  from "./dealsClient"
import dealSupplier  from "./dealSupplier"
import { Router } from "express"

export const mainRouter = Router()

mainRouter
    .use("/users", userRouter)
    .use("/workers", workerRouter)
    .use("/goals", goalR)
    .use("/dealClient", dealClient)
    .use("/dealSupplier", dealSupplier)
    .use("*", (req, res) => {
        res.status(404).json({ msg: "Not found", error: 404 });
    })
