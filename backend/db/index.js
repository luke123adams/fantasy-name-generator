import  pg  from 'pg'
 import dotenv from 'dotenv'

 dotenv.config()

 const pool = new pg.Pool({
    connectionString:
    process.env.POSTGRES_CONNECTION_URL,
})

export { pool }
// module.exports = {
//   pool,
//   query: (text, params) => {
    // return pool.query(text, params)
//   },
// }