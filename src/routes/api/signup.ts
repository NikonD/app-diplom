import express, { Request, Response, Express } from 'express'
import bcrypt from 'bcrypt'
let router = express.Router()
import config from '../../../config/config.json'
import { models } from '../../models'
import jwt from 'jsonwebtoken'
import { PassportStatic } from 'passport'
let localStrategy = require('passport-local').Strategy

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
    if (!user) {
      res.sendStatus(403)
    }

    if (await bcrypt.compareSync(values.password, user?.password as string)) {
      let _user = {id: user?.id, name: user?.fullname, role: user?.type, verify: user?.verify}
      req.session.user = _user
      res.json(req.session.user)
      // res.json({ type: 'success', user: { id: user?.id, name: user?.fullname }, token: token })
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

    await models.users.create({
      fullname: values.fullname as string,
      organization: "",
      phone: values.phone,
      email: values.email,
      type: 0,
      date_created: new Date(),
      password: values.password
    })

    res.redirect('/')
  } catch (e: any) {
    console.log(e)
    res.json({ ok: false })
  }
})

export {router}