import express from 'express';
import { createPost,updatePost,deletePost, getuserpost,getallpost,getPostdetails } 
from '../controllers/Post.Controller.js';
import Post from '../models/Post.model.js';
import { verifyUser } from '../verifyuser.js';


export const postrouter = express.Router();


postrouter.post('/write',verifyUser,createPost)
postrouter.put('/:id',verifyUser,updatePost);
postrouter.delete('/:id',verifyUser,deletePost);
postrouter.get('/:id', getPostdetails);
postrouter.get('/',getallpost);
postrouter.get('/user/:UserId',getuserpost)




export default postrouter;