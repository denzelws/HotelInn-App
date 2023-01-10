import express, { Request, Response } from "express";

const router = express.Router()

router.get('/', (req:Request, res: Response) => {
    res.send('auth endpoint')
})

router.get('/register', (req:Request, res: Response) => {
    res.send('auth register endpoint')
})

export default router