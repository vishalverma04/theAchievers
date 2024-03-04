import { Admin } from '../models/admin.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from '../utils/error.js'  
 
const signin = async(req,res,next)=>{
    const {userName,password} = req.body ; 
    try {
        const validAdmin = await Admin.findOne({userName}) ;
        console.log(validAdmin) 
        if (!validAdmin){
            return next(errorHandler(404,"Admin Not Found!"))
        } 

        if (validAdmin.password != password){
            return next(errorHandler(401,"Invalid Password!"))
        }

        const token = jwt.sign({id : validAdmin._id}, process.env.ACCESS_TOKEN_SECRET)
        const {password : pass, ...userInfo} = validAdmin._doc

        res.cookie('access_token',token,{httpOnly : true}).status(200).json(userInfo) 
    }
    catch(error){
        next(error)
    }
}

const signout = async (req,res,next)=>{
    try {
        res.clearCookie('access_token') ;
        res.status(200).json({success : true, msg : 'Admin has been logged out!'})

    } catch (error) {
        next(error) 
    }
}

export {signin,signout} ; 