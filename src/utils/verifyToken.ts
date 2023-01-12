import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.access_token
  if(!token) {
    next(res.status(404).json('Você não está autenticado'))
  }

  jwt.verify(token, process.env.JWT as string, (err ,user) => {
  if(err) return next(res.status(403).json('Token não válido!'))
  req.user = user
  next()
  })
}