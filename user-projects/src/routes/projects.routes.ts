import { Router } from 'express'
import CreateProjectService from '../services/CreateProjectService'

const usersRouter = Router()

usersRouter.post('/', async (request, respose) => {
  try {
    const { name, user_id } = request.body

    const CreateProject = new CreateProjectService()

    const user = await CreateProject.execute({
      name, user_id
    })

    return respose.json(user)
  } catch (err) {
    return respose.status(400).json({ error: err.message })
  }
})

export default usersRouter
