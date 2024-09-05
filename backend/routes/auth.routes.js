import express from 'express';
import {login, signup, logout,verifyEmail, forgotPassword} from "../controllers/auth.controller.js";

const router = express.Router();



router.post('/signup',signup);


router.post("/verify-email",verifyEmail);
router.post("/forgot-password",forgotPassword);

router.post('/login', login);

router.post('/logout', logout);







export default router;