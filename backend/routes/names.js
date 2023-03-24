import express from 'express'
export const router = express.Router()
import { addNewUser, logInUser } from '../models/signup.js'
import { getNames, addName, getUserNames, deleteName, editDescription } from '../models/names.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

router.get('/names/:race/:gender', async (req, res) => {

    const names = await getNames(req.params.race, req.params.gender)
    res.json({success: true, payload: names})
})



router.post('/signup' , async (req, res) => {

    const { email, password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    try {

    const signUp = await addNewUser(email, hashedPassword)
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
    res.json({ email, token })
    } catch (err) {
        console.error(err)
        if (err) {
            res.json({detail: err.detail})
        }
    }


        
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body


    try {
     const users = await logInUser(email);
     if (!users.rows.length) return res.json({ detail: 'User does not exist'})

      const success = await bcrypt.compare(password, users.rows[0].hashed_password)
      const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr'})

      if (success) {
        res.json({ 'email' : users.rows[0].email, token})
  } else {
        res.json({detail: 'Login failed'})
  }

    } catch (err) {
          console.error(err)
    }
})

router.post('/user-list', async (req, res) => {

    const { fullName, userEmail } = req.body
    // const {} = req.body.formData

    try {
        const addedName = await addName(fullName, userEmail);

           return res.json(addedName)
      

    } catch (err) {
        console.error(err)
  }
})

router.get('/user-list/:userEmail', async (req, res) => {

    
    const nameList = await getUserNames(req.params.userEmail)

    res.json({success: true, payload: nameList})
})

router.delete('/user-list' , async (req, res) => {

    const { full_name, userEmail } = req.body
    console.log(full_name, userEmail)

    const deletedName = await deleteName(full_name, userEmail)

    res.json({success: true, payload: deletedName})
})

router.patch('/user-list', async (req, res) => {

    const { id, description } = req.body
    
    const editedDescription = await editDescription(description, id)

    res.json({success: true, payload: editedDescription})
})