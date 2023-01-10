import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'
import authRoute from './routes/auth'

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

app.use('/api/auth', authRoute)

app.listen(8800, () => {
    connectToDatabase()
    console.log('Started the server 🔥')
})