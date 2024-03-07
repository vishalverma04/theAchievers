import { Apierror } from "../utils/apierror.js";
import { asyncHander } from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js"
import {Complaint} from "../models/complaint.model.js"
import { ApiResponse } from "../utils/apiResponse.js";
import errorHandler from "../utils/error.js";
import { Rebate} from "../models/rebate.model.js"; 
import { Feedback } from "../models/feedback.model.js";

const complaint =asyncHander(async function(req,res){
  const {category,problem}=req.body
  // console.log(category)
  // console.log(problem)

  if(!category || !problem){
    throw new Apierror(401,"all fields are required")
  }  
  const complainter=await User.findById(req.user?._id)
  const createdComplaint=await Complaint.create({
    category,problem,complainter
  })
  if(!createdComplaint){
    throw new Apierror(500, "Something went wrong while registering the Complaint")
  }
  return res.status(201).json(
    new ApiResponse(200, createdComplaint, "your Complaint registered Successfully")
)
})

const rebate = async (req,res,next) =>{
  const {reason, dateFrom, dateTo} = req.body ; 
  
  if (!reason || !dateFrom || !dateTo){
    return next(errorHandler(401,"All fields are required!"))
  }

  try {
    const user = await User.findById(req.user?._id)
    const rebateFilled = await Rebate.create({user, reason, dateFrom, dateTo})
    
    if (!rebateFilled) return next(errorHandler(500,"Something went wrong!"))

    return res.status(201).json(rebateFilled)
  }
  catch(error){
    return next(error)
  }
}

const feedback=asyncHander(async function(req,res){
   const {stars,feedbackMessage}=req.body
   if(!feedbackMessage){
    throw new Apierror(401,"Your Feedback is required")
   }
   const user=await User.findById(req?.user._id)
   const createdFeedback=await Feedback.create({stars,feedbackMessage,user})
   if(!createdFeedback){
    throw new Apierror(501,"Something went wrong while creating feedback")
   }

   return res.status(201).json(
    new ApiResponse(200,createdFeedback,"Thanks for your feedback")
   )
})

export {complaint, rebate,feedback}