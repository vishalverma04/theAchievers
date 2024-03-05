import mongoose, { modelNames } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const adminSchema = new mongoose.Schema({
    userName:{
        type:String, 
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Admin = mongoose.model("Admin",adminSchema) 