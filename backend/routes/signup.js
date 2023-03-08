import express from 'express'
export const router = express.Router()
import { addNewUser } from '../models/signup'

// app.post('/signup' , async (req, res) => {
//     const { email, password } = req.body
//     const response = await addNewUser(email, password)

//     const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
//       res.json(email, token)

// })