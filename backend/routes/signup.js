import express from 'express'
export const router = express.Router()
import { addNewUser } from '../models/signup'

app.post('/signup/:email/:password' , async (req, res) => {

    const response = await addNewUser(req.params.email, req.params.password)

    return res
})