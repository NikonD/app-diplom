import express, {Request, Response} from 'express'


let router = express.Router()

router.route('/task').get(async (req: Request, res: Response) => {
  res.send("TASK")
})


export {router}