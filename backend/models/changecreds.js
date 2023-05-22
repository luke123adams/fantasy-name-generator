import { pool } from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function changePassword(email, hashedPassword) {

    const query = await pool.query('UPDATE * SET hashed_password users SET WHERE email = $1', [hashedPassword, email])

    return query
}