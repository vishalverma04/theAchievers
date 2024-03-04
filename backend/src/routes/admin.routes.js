import express from "express" 
import {signin,signout} from '../controllers/admin.controllers.js'
const router = express.Router()

router.route('/signin').post(signin) 
router.route('/signout').get(signout) ; 

export default router 
    