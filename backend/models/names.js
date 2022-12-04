import { pool } from '../db/index.js'

export async function getNames(params) {

    const FirstNameArray = await pool.query("SELECT Name FROM First_Names WHERE race_id=$1 AND Gender=$2;",[params.race, params.gender])
    const secondNameArray = await pool.query("SELECT Name FROM Second_Names WHERE race_id=$1;", [params.race])
    return [FirstNameArray.rows, secondNameArray.rows];
}