import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken'

export interface CustomRequest extends Request {
  token: string | JwtPayload
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.access_token
    if(!token) {
      return next(res.status(404).json('Você não está autenticado'))
    }
    
    jwt.verify(token, process.env.JWT as string, (err: VerifyErrors | null, user: any) => {
      if(err) {
        return next(res.status(404).json('Token não válido!'))
      }
      (req as CustomRequest).token = user
      next()
    }) 
  }
  
  catch(err) {
    res.status(401).send('Por favor autentique-se')
  }
  
}