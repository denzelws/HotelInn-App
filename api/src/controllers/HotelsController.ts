import { NextFunction, Request, Response } from "express"

import { Document } from 'mongoose';

import Hotel from "../models/Hotel"
import Room from "../models/Room"

interface CitiesQuery {
cities: string
list: [cities: string]
}

type CitiesRequest = Request<{}, any, any, CitiesQuery>

interface HotelDocument extends Document {
      _id: string;
      type: string;
      desc: string;
      name: string;
      city: string;
      address: string;
      distance: string;
      photos: string[];
      title: string;
      rooms: string[];
      cheapestPrice: number;
      featured: boolean;
      rating?: number;
    }

    interface RoomDocument extends Document {
      _id: string;
      type: string;
      desc: string;
      name: string;
      city: string;
      address: string;
      distance: string;
      photos: string[];
      title: string;
      cheapestPrice: number;
      featured: boolean;
      rating?: number;
    }

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
      const {min,max, ...others} = req.query
      const hotels = await Hotel.find({...others, cheapestPrice: {$gt: min || 1, $lt:max || 999}, }).limit(req.query.limit as any)
      res.status(200).json(hotels)
}

export const countByCity = async (req: CitiesRequest, res: Response, next: NextFunction) => {
      const cities = req.query.cities.split(",")
      const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
      })) 
      res.status(200).json(list)
}

export const countByType = async (req: CitiesRequest, res: Response, next: NextFunction) => {
      const hotelCount = await Hotel.countDocuments({type:"hotel"})
      const apartmentCount = await Hotel.countDocuments({type:"apartment"})
      const resortCount = await Hotel.countDocuments({type:"resort"})
      const villasCount = await Hotel.countDocuments({type:"villas"})
      const chaletCount = await Hotel.countDocuments({type:"chalet"})
      const vacationHomeCount = await Hotel.countDocuments({type:"vacation"})
      res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"apartment", count:apartmentCount},
            {type:"resort", count:resortCount},
            {type:"villas", count:villasCount},
            {type:"challet", count:chaletCount},
            {type:"vacation", count:vacationHomeCount}
      ])
}

export const  getHotelRooms = async (req: Request, res: Response, next: NextFunction) => {
      const hotel = await Hotel.findById(req.params.id) as unknown as HotelDocument
      const list = await Promise.all(hotel.rooms.map( async (room) => {
            return Room.findById(room) as RoomDocument
      }))
      res.status(200).json(list)
}
