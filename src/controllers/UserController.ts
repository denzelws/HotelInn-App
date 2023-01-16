import { NextFunction, Request, Response } from "express"
import User from "../models/User"

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )   
      res.status(200).json(updatedUser)
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {

      await User.findByIdAndDelete(
        req.params.id
      )   
      res.status(200).json('User deletado')
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {

      const user = await User.findById(
        req.params.id
      )   
      res.status(200).json(user)
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

      const users = await User.find()   
      res.status(200).json(users)
}
