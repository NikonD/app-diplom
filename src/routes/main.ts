import express from 'express' 
import {router as taskRouter} from './tasks/index'
import {router as employerRouter} from './employers/index'
import {router as loginRouter} from './api/signup'

let mainRoutes = express.Router()

mainRoutes.use('/', taskRouter)
mainRoutes.use('/', employerRouter)
mainRoutes.use('/api', loginRouter)

export { mainRoutes }
