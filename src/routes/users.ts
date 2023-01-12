import express, { NextFunction, Request, Response } from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/UserController";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router()

router.get('/checkauthentication', verifyToken, (req: Request,res: Response,next: NextFunction) => {
    res.send('Olá usuário, você está autenticado :)')
})

//UPDATE
router.put('/:id', updateUser)

//DELETE
router.delete('/:id', deleteUser)

//GET
router.get('/:id', getUser)

//GET ALL
router.get('/',getAllUsers)

export default router