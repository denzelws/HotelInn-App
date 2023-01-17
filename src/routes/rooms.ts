import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/RoomController";
import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router()

//CREATE
router.post('/', verifyAdmin, createRoom)

//UPDATE
router.put('/:id', verifyAdmin, updateRoom)

//DELETE
router.delete('/:id', verifyAdmin, deleteRoom)

//GET
router.get('/:id', getRoom)

//GET ALL
router.get('/',getAllRooms)

export default router