import mongoose, { Schema } from "mongoose"

const complaintSchema=new Schema({
   category:{
    type:String,
    required:true
   },
   problem:{
    type:String,
    required:true
   },
   media:{
    type:String, 
   },
   complainter:{
    type:Schema.Types.ObjectId,
    ref:"User"
   }
},{timestamps:true})

export const  Complaint=mongoose.model("Complaint",complaintSchema)
