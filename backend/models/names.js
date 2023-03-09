import { pool } from '../db/index.js'
import { v4 } from 'uuid'

export async function getNames(race, gender) {

    const FirstNameArray = await pool.query("SELECT Name FROM First_Names WHERE race_id=$1 AND Gender=$2;",[race, gender])
    const secondNameArray = await pool.query("SELECT Name FROM Second_Names WHERE race_id=$1;", [race])
    let i = Math.floor(Math.random()*FirstNameArray.rows.length)
    let e = Math.floor(Math.random()*secondNameArray.rows.length)
    const result = [FirstNameArray.rows[i].name, secondNameArray.rows[e].name]
    let response = result.join(" ")
    return response;
}

export async function addName (fullName, userEmail) {

    const { name, race, gender } = fullName
    const id = v4()
    
    const response = await pool.query("INSERT INTO saved_names (id, user_email, full_name, race_id, gender) VALUES ($1, $2, $3, $4, $5) RETURNING *", [id, userEmail, name, race, gender])

    return response
}