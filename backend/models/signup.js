import { pool } from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export async function addNewUser(email, password) {
      
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(password, salt)
      const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING *`,
        [email, hashedPassword])
}