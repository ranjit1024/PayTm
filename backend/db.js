import mongoose from "mongoose";
mongoose.connect("mongodb+srv://ranjit:iamranjit@cluster0.ehxzb.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30   
    },
    password:{
        type:String,
        require:true,
        minLength:5,
        maxLength:50,
    },
    firstname:{
        type:String,
        require:true,
        minLength:5,
        maxLength:50
    },
    lastname:{
        type:String,
        require:true,
        minLength:5,
        maxLength:50
    }
    
})

export const users = mongoose.model("user",userSchema);


