import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'
import cookieParser from 'cookie-parser'

import authRoute from './routes/auth'
import hotelsRoute from './routes/hotels'
import roomsRoute from './routes/rooms'
import usersRoute from './routes/users'

const app = express()
dotenv.config()

const connectToDatabase = async () => {

try {
    await mongoose.connect(`${process.env.MONGO}`);
    console.log('Conected to mongoDB')
  } catch (error) {
    throw(error)
  }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!')  
  })

app.get('/', (req: Request, res: Response) => {
    res.send('first request')
})

app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)

app.listen(8800, () => {
    connectToDatabase()
    console.log('Started the server 🔥')
})