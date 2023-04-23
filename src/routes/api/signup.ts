import express, { Request, Response } from 'express'
import bcrypt from 'bcrypt'
let router = express.Router()
import config from '../../../config/config.json'
import { models } from '../../models'
import jwt from 'jsonwebtoken'



router.route('/signin').post(async (req: Request, res: Response) => {
  let values = req.body
  console.log(req.body)

  try {
    let user = await models.users.findOne({
      where: {
        email: values.email
      }
    })
    console.log(user)
    if (!!user) {
      res.sendStatus(403)
    }

    if (await bcrypt.compareSync(values.password, user?.password as string)) {
      const token = jwt.sign({ id: user?.id, type: user?.type }, config.JWTSECRETKEY, { expiresIn: '5 days' })
      res.json({ type: 'success', user: { id: user?.id, name: user?.fullname }, token: token })
    }
    else {
      res.sendStatus(403)
    }

  } catch (e: any) {
    console.log((e as Error).message)
    res.json({
      type: 'error',
      message: 'server error'
    })
  }


})

router.route('/signup').post(async (req, res) => {
  try {
    const salt = config.HASHSALT || 8
    let values = req.body
    console.log(values)

    values.password = await bcrypt.hash(values.password, salt)

    // await pool.query(`
    // INSERT INTO users (fullname, email, phone, organization, password, type, date_created)
    // VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    //   [
    //     values.fullname,
    //     values.email,
    //     values.phone,
    //     values.organization,
    //     values.password,
    //     0,
    //     new Date()
    //   ])
    // res.redirect('/')
  } catch (e: any) {
    console.log(e)
    res.json({ ok: false })
  }
})

export { router }