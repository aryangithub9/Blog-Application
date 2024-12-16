import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import Connectdb from './DB.js';
import cors from 'cors'
import {authrouter} from './routes/auth.route.js';
import {userrouter} from './routes/user.route.js'
import {postrouter} from './routes/post.route.js'
import {commentrouter} from './routes/comment.route.js'

const app = express();


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


app.use(express.json());
app.use(cookieParser());

Connectdb();


app.use('/api/auth',authrouter);
app.use('/api/user',userrouter);
app.use('/api/post',postrouter);
app.use('api/comment',commentrouter);




app.listen(process.env.PORT,()=>{
    console.log("Server Started At pORT 8000");
})