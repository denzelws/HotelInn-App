import mongoose from 'mongoose'

import {Document, Schema} from 'mongoose';

export interface User extends Document {
    username: string
    email: string
    password: string
    isAdmin: boolean
    _doc?: any
}

const UserSchema: Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},{ timestamps: true })


export default mongoose.model('User', UserSchema)