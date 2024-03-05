import {Router} from "express"
import { loginUser, logoutUser, registerUSer } from "../controllers/user.controllers.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js"


const router=Router()

router.route('/register').post(registerUSer)  // http://localhost:4000/api/v1/users/register
router.route('/login').post(loginUser)  // http://localhost:4000/api/v1/users/login
router.route('/logout').post(verifyJWT,logoutUser)  // http://localhost:4000/api/v1/users/logout


export default router