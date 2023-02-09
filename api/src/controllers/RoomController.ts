import { NextFunction, Request, Response } from "express";

import Room from "../models/Room";
import Hotel from "../models/Hotel";

export const createRoom = async (req: Request,res: Response,next: NextFunction) => {
  const hotelId = req.params.hotelid
  const newRoom = new Room(req.body)

  const savedRoom = await newRoom.save()
  await Hotel.findByIdAndUpdate(hotelId, {
    $push: { rooms: savedRoom._id },
  })
  res.status(200).json(savedRoom)
}

export const updateRoom = async (req: Request, res: Response, next: NextFunction) => {

    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )   
    res.status(200).json(updatedRoom)
}

export const updateRoomAvailability = async (req: Request, res: Response, next: NextFunction) => {

    await Room.updateOne(
    {"roomNumbers._id": req.params.id}, {
     $push: {
      "roomNumbers.$.unavailableDates": req.body.dates
     }
    })  
    res.status(200).json('Status do quarto atualizado')
}

export const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
  const hotelId = req.params.hotelid
    await Room.findByIdAndDelete(
      req.params.id
    )
    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: req.params.id },
    })   
    res.status(200).json('Quarto deletado')
}

export const getRoom = async (req: Request, res: Response, next: NextFunction) => {

    const room = await Room.findById(
      req.params.id
    )   
    res.status(200).json(room)
}

export const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {

    const rooms = await Room.find()   
    res.status(200).json(rooms)
}
