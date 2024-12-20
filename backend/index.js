import express from "express"
import cors from "cors"

import { router } from "./routes/index.js";
// import { userRouter } from "./routes/user.js";


const app = express();

app.use(express.json());
app.use(cors());

// all  router path
app.use("/api/v1", router);

//end


app.listen(4000, ()=>{
    console.log("Running...")
})