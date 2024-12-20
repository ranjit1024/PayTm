import express from "express"
import cors from "cors"

import { router } from "./routes/index.js";
import { userRouter } from "./routes/user.js";


const app = express();

app.use(cors);

// all  router path
app.use("/api/v1", router);
app.use("api/v1/user", userRouter)
//end




app.listen(4000, ()=>{
    console.log('this is working')
})