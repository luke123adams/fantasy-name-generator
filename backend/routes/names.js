import express from 'express'
export const router = express.Router()

import { getNames } from '../models/names.js'

router.get('/names', async (req, res) => {

    const params = req.body
    const names = await getNames(params)
    res.json({success: true, payload: names})
})
