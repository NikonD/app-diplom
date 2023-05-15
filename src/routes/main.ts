import express from 'express'
import { router as taskRouter } from './tasks/index'
import { router as loginRoutes } from './api/signup'
import { router as employerRouter } from './employers/index'

let mainRoutes = express.Router()

mainRoutes.use('/api', loginRoutes)
mainRoutes.use('/', taskRouter)
mainRoutes.use('/', employerRouter)


export { mainRoutes }
