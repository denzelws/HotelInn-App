import { NextFunction, Request, Response } from "express"
import User from "../models/User"

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const registerUser = async(req: Request,res: Response,next: NextFunction) => {
    try { 
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
         })

         await newUser.save()
         res.status(200).send('Usuário criado')
    } catch (error) {
        next(error)
    }
}

export const loginUser = async(req: Request,res: Response,next: NextFunction) => {
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user) return next(res.status(404).json('Usuário não encontrado'))

        const passwordCheck = await bcrypt.compare(req.body.password, user.password)

        if(!passwordCheck) return next(res.status(404).json('Senha incorreta ou usuário'))
        
        const token = jwt.sign({ id:user._id, isAdmin:user.isAdmin }, process.env.JWT as string)

        const {password, isAdmin, ...otherDetails} = user._doc

        res
          .cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({ ...otherDetails })
    } catch (error) {
        next(error)
    }
}