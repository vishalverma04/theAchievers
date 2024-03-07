import mongoose from "mongoose";

const feedbackSchema=new mongoose.Schema({
  stars:{
    type:Number,
    required:true,
    default:5
  },
  feedbackMessage:{
    type:String,
    required:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
})

export const Feedback=mongoose.model("Feedback",feedbackSchema)