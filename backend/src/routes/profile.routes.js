import { Router } from "express";
// import { upload } from "../middlewares/multer.middlewares.js";
import { complaint } from "../controllers/profile.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router=Router()

router.route('/complaint').post(
    verifyJWT,complaint
)   // http:localhost:4000/api/v1/profile/complaint

export default router