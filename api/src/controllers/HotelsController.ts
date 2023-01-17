import { NextFunction, Request, Response } from "express"
import Hotel from "../models/Hotel"

export const createHotel = async (req: Request, res: Response, next: NextFunction) => {

    const newHotel = new Hotel(req.body)
    const savedHotel = await newHotel.save()   
    res.status(200).json(savedHotel)
}

export const updateHotel = async (req: Request, res: Response, next: NextFunction) => {

      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )   
      res.status(200).json(updatedHotel)
}

export const deleteHotel = async (req: Request, res: Response, next: NextFunction) => {

      await Hotel.findByIdAndDelete(
        req.params.id
      )   
      res.status(200).json('Hotel deletado')
}

export const getHotel = async (req: Request, res: Response, next: NextFunction) => {

      const hotel = await Hotel.findById(
        req.params.id
      )   
      res.status(200).json(hotel)
}

export const getAllHotels = async (req: Request, res: Response, next: NextFunction) => {

      const hotels = await Hotel.find()   
      res.status(200).json(hotels)
}
