import express from 'express'
export const router = express.Router()

import { getNames } from '../models/names.js'

router.get('/names/:race/:gender', async (req, res) => {

    const names = await getNames(req.params.race, req.params.gender)
    res.json({success: true, payload: names})
})