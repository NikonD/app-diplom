import express from 'express'
import { knex, pool } from '../../models'

let router = express.Router()


router.route('/signup').post(async (req, res) => {
  try {

    let values = req.body
    console.log(values)

    // bcrypt

    await pool.query(`
    INSERT INTO users (fullname, email, phone, organization, password, type, date_created)
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        values.fullname,
        values.email,
        values.phone,
        values.organization,
        values.password,
        0,
        new Date()
      ])
    res.redirect('/')
  } catch (e: any) {
    console.log(e)
    res.json({ ok: false })
  }
})

export { router }