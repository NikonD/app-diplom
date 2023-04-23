import express, { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { models } from '../../models'
import jwt from 'jsonwebtoken'
import config from '../../../config/config.json'


let router = express.Router()

router.route('/signin').post(async (req: Request, res: Response) => {
  let values = req.body.values


  try {
    let user = await models.users.findOne({
      where: {
        email: values.email
      }
    })

    if (!!user) {
      res.json({
        type: 'error'
      })
    }

    if (bcrypt.compareSync(values.password, user?.password as string)) {
      const token = jwt.sign({ id: user?.id, type: user?.type }, config.JWTSECRETKEY, { expiresIn: '5 days' })
      res.json({type: 'success', user: { id: user?.id, name: user?.fullname }, token: token })
    }
    else {
      res.json({
        type: 'error'
      })
    }
  } catch (e: any) {
    console.log((e as Error).message)
    res.json({
      type: 'error',
      message: 'server error'
    })
  }


})