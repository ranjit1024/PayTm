import express from "express"
import cors from "cors"

import rootRouter from "./routes/index";
import userRouter from "./routes/user.js"

const app = express();

app.use(cors);
app.use("/api/v1", rootRouter);
app.use("/api/v1/user", userRouter);

app.get("/", (req,res) =>{
    res.send('ok')
})

app.listen(4000, ()=>{
    console.log('this is working')
})