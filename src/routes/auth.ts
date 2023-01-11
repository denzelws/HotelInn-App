import express, { Request, Response } from "express";
import { loginUser, registerUser } from "../controllers/AuthController";

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router