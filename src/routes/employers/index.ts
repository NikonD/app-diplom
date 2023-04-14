import express, {Request, Response} from 'express'


let router = express.Router()

router.route('/employers').get(async (req: Request, res: Response) => {
  res.send("employers")
})


export {router}