import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import User from "../models/User.model.js";
import Post from "../models/Post.model.js";
import Comment from "../models/Comment.model.js";
import { deleteuser, getuser, updateuser } from "../controllers/User.Controller.js";
import { verifyUser } from "../verifyuser.js";

export const userrouter = express.Router();

userrouter.put('/:id',verifyUser,updateuser);
userrouter.delete('/:id',verifyUser,deleteuser);
userrouter.get('/:id', getuser);


export default userrouter;
