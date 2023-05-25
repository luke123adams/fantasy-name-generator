import express from 'express'
export const router = express.Router()
import { addNewUser } from '../models/signup'

app.post('/signup' , async (req, res) => {

    const { email, password, username } = req.body

    const response = await addNewUser(email, password, username)

    return res
})