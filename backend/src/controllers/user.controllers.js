import { asyncHander } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import {ApiResponse} from "../utils/apiResponse.js"
import { Apierror } from "../utils/apierror.js";

const generateAccessandRefreshToken=async(userId)=>{
    try {
      const user=await User.findById(userId)
      const accessTokens=user.generateAccessToken()
      const refreshTokens=user.generateRefreshTokens()
     
      user.refreshToken=refreshTokens
      await user.save({validateBeforeSave:false})
      return {accessTokens,refreshTokens}
    } catch (error) {
      throw new Apierror(500,"Something went wrong while generating access and refresh token")
    }
}

const registerUSer=asyncHander(async (req,res)=>{
   const {fullName,rollNumber,email,mobileNumber,hostelNumber,roomNumber,password} =req.body
   
   const existedUser=await User.findOne({
    $or:[
        {mobileNumber},{email},{rollNumber}
    ]
 })
 if(existedUser){
    throw new Apierror(409,"user already existed")
 }
   
const user=await User.create({
    fullName,
    email,
    rollNumber,
    mobileNumber,
    hostelNumber,
    roomNumber,
    password
})

const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
 )
 if(!createdUser){
    throw new Apierror(500,"something went wrong while registering the user")
 }
 return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered Successfully")
 )

})

const options={
    httpOnly:true,
    secure:true
  }

const loginUser=asyncHander(async (req,res)=>{
    
  const {userdata,password}=req.body
  const email=userdata
  const mobileNumber=userdata
  const rollNumber=userdata
 
  console.log(userdata)
  console.log(password)
  const user=await User.findOne({
    $or:[{email},{mobileNumber},{rollNumber}]
  })

  if(!user){
    throw new Apierror(402,"user does not exits")
  }

  const isValidPassword=await user.isPasswordCorrect(password)

  if(!isValidPassword){
    throw new Apierror(401,"Password is incorrect")
  }

  const {accessTokens,refreshTokens}=await generateAccessandRefreshToken(user._id)
  
   const loggedInUser=await User.findById(user._id).select(
    "-password -refreshToken"
   )

  res.status(200)
  .cookie("accessTokan",accessTokens,options)
  .cookie("refreshTokan",refreshTokens,options)
  .json(
    new ApiResponse(200,{user:loggedInUser,accessTokens,refreshTokens},"user logged in successFully")
  )
})

const logoutUser=asyncHander(async (req,res)=>{
    await User.findByIdAndUpdate(req.user._id,{
        $set:{
            refreshToken:undefined
        }
    },{
        new:true
    })
    res.status(200)
.clearCookie("accessTokan",options)
.clearCookie("refreshTokan",options)
.json(new ApiResponse(200,{},"User logged Out"))
})

export {
    registerUSer,loginUser,logoutUser
}