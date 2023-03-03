import { pool } from '../db/index.js'

export async function addNewUser(email, password) {
    const { email, password } = req.body
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(password, salt)

      try {
      const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES ($1, $2)`,
        [email, hashedPassword])

      const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
      res.json({ email, token })

      } catch (err) {
            console.error(err)
            if (err) {
                  res.json({detail: err.detail})
            }
      }
}