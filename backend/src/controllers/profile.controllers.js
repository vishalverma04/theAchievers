import { Apierror } from "../utils/apierror.js";
import { asyncHander } from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js"
import {complaint} from "../models/complaint.model.js"
import { ApiResponse } from "../utils/apiResponse.js";

const complaint =asyncHander(async function(req,res){
  const {category,problem}=req.body
  // console.log(category)
  // console.log(problem)

  if(!category || !problem){
    throw new Apierror(401,"all fields are required")
  } 
  const complainter=await User.findById(req.user?._id)
  const createdComplaint=await complaint.create({
    category,problem,complainter
  })
  if(!createdComplaint){
    throw new Apierror(500, "Something went wrong while registering the Complaint")
  }
  return res.status(201).json(
    new ApiResponse(200, createdComplaint, "your Complaint registered Successfully")
)
})

export {complaint}