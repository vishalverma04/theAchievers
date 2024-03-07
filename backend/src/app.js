import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send("server is ready to use!!!")
})

//router import
import userRouter from './routes/user.routes.js'
import userComplaint from './routes/profile.routes.js'
import adminRouter from './routes/admin.routes.js'
// route declaration
app.use('/api/v1/users',userRouter)  
app.use('/api/v1/admin',adminRouter)
app.use('/api/v1/profile',userComplaint)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500 ; 
    const message = err.message || "Internal Server Error" ; 
    return res.status(statusCode).json({success:false, statusCode, message})
})
 
export default app