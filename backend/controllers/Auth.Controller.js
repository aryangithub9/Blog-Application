import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req,res)=>{
    try {
        const{username,email,password}=req.body;
        const hassedpassword = await bcrypt.hash(password,10);
        const newUser = new User({username,email,password:hassedpassword});
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });  // Use findOne for a single match
        if (!user) {
            return res.status(404).json('User not found');
        }

        const match = await bcrypt.compare(password, user.password);  // Use async bcrypt.compare
        if (!match) {
            return res.status(401).json('Wrong Credentials');  // Fix typo and status code
        }

        const token = jwt.sign({ _id: user._id,username:user.username,email:user.email }, process.env.SECRET, { expiresIn: '3d' });
        const { password: _, ...user1 } = user._doc
       
        return res.cookie("JwtToken",token).status(200).json(user1) // Return user and token in response
    } catch (error) {
        return res.status(500).json({ error: error.message });  // Return error details
    }
}

export const logout = async (req,res)=>{
    try {
        res.clearCookie("token",
            {sameSite:"none",
             secure:true})
             .status(200).json("User LogOut Sucessfully");
    } catch (error) {
        res.status(500).json(error)
        
    }
}

export const refetch= async(req,res)=>{
    const JwtToken = req.cookies.JwtToken;
     jwt.verify(JwtToken, process.env.SECRET, {}, async (err, data) => {
        if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(data);
    })
}
