import { pool } from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// sign up
export async function addNewUser(email, hashedPassword, username) {

      const signUp = await pool.query(`INSERT INTO users (email, hashed_password, username) VALUES ($1, $2, $3) RETURNING *`,
        [email, hashedPassword, username])

      const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

      return signUp 
}

// log in
export async function logInUser(email) {

      if (email.includes("@")) {

      const logIn = await pool.query('SELECT * FROM users WHERE email = $1', [email])

      return logIn
      }

      else {

            const logIn = await pool.query('SELECT * FROM users WHERE username = $1', [email])

      return logIn
      }
}

export async function editCredentials (creds, email, ) {

      if (isPassword === true) {


            return (await pool.query('UPDATE users SET hashed_password=$1 WHERE email=$2', [creds, email]))
      }

      else {

            return (await pool.query('UPDATE users SET username=$1 WHERE email=$2'[creds, email]))

      }
}

      