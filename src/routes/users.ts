import express, { NextFunction, Request, Response } from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/UserController";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";

const router = express.Router()

router.get('/checkauthentication', verifyToken, (req: Request,res: Response,next: NextFunction) => {
    res.send('Olá usuário, você está autenticado :)')
})

router.get('/checkuser/:id', verifyUser, (req: Request,res: Response,next: NextFunction) => {
    res.send('Olá usuário, você está logado e pode deletar sua conta.')
})


router.get('/checkadmin/:id', verifyAdmin, (req: Request,res: Response,next: NextFunction) => {
    res.send('Olá administrador, você está logado e pode deletar todas as contas.')
})

//UPDATE
router.put('/:id', verifyUser, updateUser)

//DELETE
router.delete('/:id', verifyUser ,deleteUser)

//GET
router.get('/:id', verifyUser, getUser)

//GET ALL
router.get('/',verifyAdmin, getAllUsers)

export default router