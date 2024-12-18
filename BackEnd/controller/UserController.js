import { userModel } from "../model/UserModel.js";
import bcrypt from "bcrypt";


// controller to handle sign up forms
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

// controller to handle user logins
export const loginUserController = async (req,res) => {
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Please enter all fields"
            })
        }

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).send({
                success:false,
                message:"User does not exist"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).send({
                success:false,
                message:"Password or email is incorrect"
            })
        }

        return res.status(200).send({
            success:true,
            message:"Login successfull",
            user
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: " Error in login call back",
            err,
        })
    }
}

// controller to add skill to skills section
export const addSkillsController = async (req,res) => {
    try {
        const {email , skill} = req.body;

        if(!email || !skill){
            return res.status(400).send({
                success: false,
                message: "Email or skill missing"
            })
        }

        const user = await userModel.findOne({email});
        if (user) {

            user.skills.push(skill)
            await user.save();
            return res.status(201).send({
                user
            })
        } else {
            console.log("User not found");
            return res.status(400).send({
                success:false,
                message:"error adding up skill"
            })
        }

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: " Error in adding skills",
            err,
        })
    }
}

// controller to remove a skill from a skills section
export const removeSkillsController = async (req,res) => {
    try {
        const {email,skill} = req.body;

        if(!email || !skill){
            return res.status(400).send({
                success: false,
                message:"Enter proper email or skill"
            })
        }

        const user = await userModel.findOne({email});

        if (user) {

            user.skills.pull(skill)
            await user.save();
            return res.status(204).send({
                success: true,
                message: "Skill deletion successfull"
            })
        } else {
            console.log("User not found");
            return res.status(400).send({
                success:false,
                message:"error adding up skill"
            })
        }

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: " Error in removing skills",
            err,
        })
    }
}

// controller to return a particular user details
export const showProfileController = async (req,res) => {
    try {

    const user = await userModel.findById(req.params.id);

    if(user){
        return res.status(200).send({
            success: true,
            message: "User Found",
            user
        })
    }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: " Error in finding user",
            err,
        })
    }
}   