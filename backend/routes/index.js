import express from "express";
import { userRouter } from "./user.js";

export const router = express.Router();

router.get('/', (req,res)=>{
    res.send("this is data")
})

router.use("/user", userRouter);