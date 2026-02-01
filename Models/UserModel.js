//create user schema

import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required:[true, 'Username is required'],
        minLength: [4, 'min len should be 4'],
        maxLength: [6, 'max len exceeded']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    age: {
        type: Number,   
        required: [true, 'Age is required'],
        min: [18, 'Age cannot be less than 18'],
        max: [25, 'Age cannot be more than 25'],
    },
},{strict: "throw",
    timestamps: true
});
//create user model with that schema

export const UserModel = model("user", userSchema)