import mongoose from "mongoose";
import express from 'express';
import bcrypt from 'bcrypt';
import User from "../models/User.model.js";
import Post from "../models/Post.model.js";
import Comment from "../models/Comment.model.js";


//create post//
export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (error) {
        return res.status(400).json(error);
    }
};

//update post//
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params; // Ensure the id is fetched from request parameters
        const updatedPost = await Post.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json(error);
    }
};

//delete post//
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params; 
        await Post.findByIdAndDelete(id); 
        return res.status(200).json("Post deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
};

 //post details//
export const getPostdetails = async (req, res) => {
    try {
       
        const post = await Post.findById(req.params.id)
        return res.status(200).json(post);
    } catch (error) {
        return res.status(403).json(error);
    }
};

//getallpost
export const getallpost=async(req,res)=>{
    const query = req.query;
    console.log(query);
    try {
        const searchfilter = {
            title:{$regex:query.search , $options:'i'}
        }
        const allpost = await Post.find({});
        const post = await Post.find(query.search?searchfilter:null);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(404).json(error)
    }
}

export const getuserpost=async(req,res)=>{
    try {
        const post = await Post.find({UserId:req.params.UserId})
        return res.status(200).json(post);
    } catch (error) {
        return res.status(404).json(error)
    }
}
