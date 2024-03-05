import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import { loadavg } from "os";
   
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary=async (localfilepath)=>{
  try{
    console.log(localfilepath)
   if(!localfilepath) return null;
   // upload the file on cloudinary
 const responce=await cloudinary.uploader.upload(localfilepath,{
    resource_type:"auto"
   })
  // file has been uploaded succesfull
  fs.unlinkSync(localfilepath)
 return responce
  }catch(error){
//    fs.unlinkSync(localfilepath) // remove the locally saved temporary file as the upload operations got failed

   return null;

  }
}

export {uploadOnCloudinary}