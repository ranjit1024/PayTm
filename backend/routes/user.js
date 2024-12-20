import express from "express";
import zod from "zod";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js";
import { users } from "../db.js";


export const userRouter = express.Router();

//zod validation
const signupBody = zod.object({
     username : zod.string().email(),
     password : zod.string(),
    firstname : zod.string(),
    lastname : zod.string()
})
//done


userRouter.post('/signup', async (req,res)=>{
    const {success} = signupBody.safeParse(req.body);
   
    if(!success){
        return res.status(411).json({
            msg:"Email already taken / incorrect input"
        })
    }

    const existingUser = await users.findOne({
        username:req.body.username
    })


    if(existingUser){
        return res.status(411).json({
            msg:"Eamil is already taken in db/incorrect input",
        })
    }

    
    const newUser = await users.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
    })

    const userId = newUser._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);
    
    res.status(200).json({"msg":'this is data'})
})

///end //

const signInBody = zod.object({
    username:zod.string().email(),
    password:zod.string()
})

userRouter.post('/signin',async (req,res)=>{
    const { success } = signInBody.safeParse(req.body);
    
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await users.findOne({
        username:req.body.username,
        password:req.body.password
    })

    const userId = user._id
    console.log(userId)

    if(user){
        const token = jwt.sign("fsadfa", JWT_SECRET);

        res.json({
            token:token
        })
        return;
    }

    res.status(411).json({
        "msg":"Error while logging in"
    })

})