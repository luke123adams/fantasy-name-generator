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

export async function getUserNames(userEmail) {

    const response = await pool.query('SELECT * FROM saved_names WHERE user_email=$1', [userEmail])

    return response.rows

}

export async function  deleteName (name, userEmail) {

    const response = await pool.query('DELETE FROM saved_names WHERE user_email=$1 AND full_name=$2', [userEmail, name])
}

export async function editDescription(newDescription, nameId) {

    console.log(nameId, newDescription)



    const response = await pool.query(`UPDATE saved_names SET description=$1 WHERE id=$2`, [newDescription, nameId])
}

export async function editName (newUsername, userEmail) {

    console.log(userEmail, newUsername)

    const response = await pool.query(`UPDATE users SET username=$1 WHERE email=$2 RETURNING *`, [newUsername, userEmail])
}