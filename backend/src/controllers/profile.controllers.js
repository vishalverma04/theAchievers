import { Apierror } from "../utils/apierror.js";
import { asyncHander } from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js"
import {Complaint} from "../models/complaint.model.js"
import { ApiResponse } from "../utils/apiResponse.js";
import errorHandler from "../utils/error.js";
import { Rebate} from "../models/rebate.model.js"; 

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

export {complaint, rebate}