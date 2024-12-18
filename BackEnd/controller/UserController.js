import { userModel } from "../model/UserModel.js";
import bcrypt from "bcrypt";

export const registerUserController = async ( req,res ) => {
    try{
        const {email , name , password , role} = req.body;

        if(!email || !name || !password || !role){
            return res.status(400).send({
                success:false,
                message: "Please Fill all details",
            })
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.status(400).send({
                success:false,
                message:"User already exists"
            })
        }

        const hashPass = await bcrypt.hash(password,10);

        const user = new userModel({email: email,password: hashPass,role: role,name: name});

        user.save();

        return res.status(201).send({
            success: true,
            message: "User created Successfully",
            user,
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Error saving user",
            success: false,
            err,
        });
    }
}