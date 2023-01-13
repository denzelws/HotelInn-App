import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken'
import { User } from '../models/User'

export interface CustomRequest extends Request {
  user: User
  id: string | JwtPayload
  token: string | JwtPayload
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token
    if(!token) {
      return next(res.status(404).json('Você não está autenticado'))
    }
    
    jwt.verify(token, process.env.JWT as string, (err: VerifyErrors | null, user: any) => {
      if(err) {
        return next(res.status(404).json('Token não válido!'))
      }
      (req as CustomRequest).user = user
      next()
    }) 
  }

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
    verifyToken(req, res, () => {
        if((req as CustomRequest).user.id === req.params.id || req.params.isAdmin) {
          next()
        }  else {
          return next(res.status(403).send('Você não está autorizado!'))
        }
    })
}

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
      if((req as CustomRequest).user.isAdmin) {
        next()
      }  else {
        return next(res.status(403).send('Você não está autorizado!'))
      }
  })
}