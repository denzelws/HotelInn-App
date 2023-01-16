import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken'
import { User } from '../models/User'
import { ForbiddenError, NotFoundError } from './api-errors'

export interface CustomRequest extends Request {
  user: User
  id: string | JwtPayload
  token: string | JwtPayload
  isAdmin: boolean
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token
    if(!token) throw new NotFoundError('Você não está autorizado')
    
    jwt.verify(token, process.env.JWT as string, (err: VerifyErrors | null, user: any) => {
      if(err) {
        throw new NotFoundError('Token não válido!')
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
          throw new ForbiddenError('Você não está autorizado!')
        }
    })
}

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
      if((req as CustomRequest).user.isAdmin) {
        next()
      }  else {
        throw new ForbiddenError('Você não está autorizado!')
      }
  })
}