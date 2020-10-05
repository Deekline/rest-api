import express from 'express';
import * as authController from '../controllers/auth.js';

const router = express.Router()


router.post('/signin', authController.signIn)

router.post('/signup', authController.signUp)

export {router as authRouter}
