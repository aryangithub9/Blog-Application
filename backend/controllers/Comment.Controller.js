import mongoose from "mongoose";
import express from 'express';
import bcrypt from 'bcrypt';
import User from "../models/User.model.js";
import Post from "../models/Post.model.js";
import Comment from "../models/Comment.model.js";


//create comment//
export const createComment = async (req, res) => {
    try {
        const newcomment = new Comment(req.body);
        const savedcomment = await newcomment.save();
        return res.status(200).json(savedcomment);
    } catch (error) {
        return res.status(400).json(error);
    }
};

//update comment//
export const updatecomment = async (req, res) => {
    try {
        const { id } = req.params; // Ensure the id is fetched from request parameters
        const updatecomment = await Comment.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updatecomment);
    } catch (error) {
        res.status(500).json(error);
    }
};

//delete comment//
export const deletecomment = async (req, res) => {
    try {
        const { id } = req.params; 
        await Comment.findByIdAndDelete(id); 
        return res.status(200).json("Comment deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
};

 

export const getpostcomments=async(req,res)=>{
    try {
        const commemnts = await Comment.find({PostId:req.params.PostId})
        return res.status(200).json(commemnts);
    } catch (error) {
        return res.status(404).json(error)
    }
}
