import mongoose, { Schema } from "mongoose";

const rebateSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },  
    reason : {
        type : String, 
        required : true, 
    }, 
    dateFrom : {
        type : Date,
        required : true
    }, 
    dateTo : {
        type:Date,
        required : true
    }
},{timestamps:true})

export const Rebate = mongoose.model("Rebate",rebateSchema) 
