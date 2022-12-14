import { pool } from '../db/index.js'

export async function getNames(race, gender) {

    const FirstNameArray = await pool.query("SELECT Name FROM First_Names WHERE race_id=$1 AND Gender=$2;",[race, gender])
    const secondNameArray = await pool.query("SELECT Name FROM Second_Names WHERE race_id=$1;", [race])
    let i = Math.floor(Math.random()*FirstNameArray.rows.length)
    let e = Math.floor(Math.random()*secondNameArray.rows.length)
    const result = [FirstNameArray.rows[i].name, secondNameArray.rows[e].name]
    let response = result.join(" ")
    return response;
}