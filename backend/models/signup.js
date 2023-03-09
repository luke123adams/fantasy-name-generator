import { pool } from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// sign up
export async function addNewUser(email, hashedPassword) {

      const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING *`,
        [email, hashedPassword])

      const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
}

// log in
export async function logInUser(email) {

      const logIn = await pool.query('SELECT * FROM users WHERE email = $1', [email])

      return logIn
}