import express from 'express'
export const router = express.Router()
import { addNewUser } from '../models/signup.js'
import { getNames } from '../models/names.js'
import bcrypt from 'bcrypt'

router.get('/names/:race/:gender', async (req, res) => {

    const names = await getNames(req.params.race, req.params.gender)
    res.json({success: true, payload: names})
})



router.post('/signup' , async (req, res) => {

    const { email, password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const response = await addNewUser(email, hashedPassword)
    res.json({ email, token })
})