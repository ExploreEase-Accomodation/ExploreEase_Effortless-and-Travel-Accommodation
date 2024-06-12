import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser, getUserProfile, updateProfileImage } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from 'multer';

const router = Router();
const upload = multer(); 


router.route('/signup').post( registerUser )



router.route('/login').post(loginUser)

//secured routes

router.route('/logout').post(verifyJWT, logoutUser)  // verifyJWT- it is a middleware which works before the logout called
router.route('/user/profile').get(verifyJWT, getUserProfile);


router.route('/refresh-token').post(refreshAccessToken)

router.post('/profile/image', upload.single('profilePic'), updateProfileImage)


export default router;