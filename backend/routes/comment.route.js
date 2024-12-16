import express from 'express';
import {createComment,updatecomment,deletecomment,getpostcomments} from '../controllers/Comment.Controller.js'
import { verifyUser } from '../verifyuser.js';
export const commentrouter = express.Router();


commentrouter.post('/write',verifyUser,createComment)
commentrouter.put('/:id',verifyUser, updatecomment);
commentrouter.delete('/:id',verifyUser,deletecomment);
commentrouter.get('/post/:PostId', getpostcomments);



export default commentrouter;