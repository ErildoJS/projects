import { Router } from 'express'
import usersRouter from './users.routes'
import projectsRouter from './projects.routes'
const routes = Router()

routes.use('/users', usersRouter)
routes.use('/projects', projectsRouter)

export default routes
