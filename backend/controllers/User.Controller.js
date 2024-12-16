import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import User from "../models/User.model.js";
import Post from "../models/Post.model.js";
import Comment from "../models/Comment.model.js";


export const updateuser = async (req, res) => {
    try {
        let { password } = req.body;  // Use let instead of const
        const { id } = req.params;

        if (password) {
            password = await bcrypt.hash(password, 10);
            req.body.password = password;  // Update req.body with the hashed password
        }

        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteuser = async (req, res) => {
    try {
        await User.findOneAndDelete(req.params.id);
        await Post.deleteMany({UserId:req.params.id});
        await Comment.deleteMany({UserId:req.params.id});
        return res.status(200).json("User deleted Sucessfully")
    }    
    
    catch (error) {
        res.status(500).json(error);
    }
}

export const getuser=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        return res.status(200).json(user);   
    } catch (error) {
        return res.status(403).json(error)
    }
}


