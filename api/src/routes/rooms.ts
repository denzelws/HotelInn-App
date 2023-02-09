import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom, updateRoomAvailability } from "../controllers/RoomController";
import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router()

//CREATE
router.post('/:hotelid', verifyAdmin, createRoom)

//UPDATE
router.put('/:id', verifyAdmin, updateRoom)
router.put('/availability/:id', updateRoomAvailability)

//DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)

//GET
router.get('/:id', getRoom)

//GET ALL
router.get('/',getAllRooms)

export default router