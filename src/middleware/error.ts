import { NextFunction, Request, Response } from "express"

export const errorMiddleware = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    console.log(err)
    return res.json('Caiu no middleware')
}