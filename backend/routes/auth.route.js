import express from 'express'
import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { login, logout,  refetch,  register } from '../controllers/Auth.Controller.js';
export const authrouter = express.Router();

authrouter.post('/register',register)
authrouter.post('/login',login);
authrouter.post("/logout",logout);
authrouter.get('/refetch', refetch)
export default authrouter;


