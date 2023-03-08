import { pool } from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export async function addNewUser(email, hashedPassword) {

      const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING *`,
        [email, hashedPassword])

      const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
}