import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({})
    }

    const token = authHeader.split('')[1];

    try{
        const decode = jwt.verify(token,JWT_SECRET);
        req.userId = decode.userId;
    }catch(err){
        return res.status(403).json({
            
        })
    }
}