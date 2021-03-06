import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

const usersRouter = Router()

usersRouter.post('/', async (request, respose) => {
  try {
    const { name, email, password } = request.body

    const CreateUser = new CreateUserService()

    const user = await CreateUser.execute({
      name, email, password
    })

    return respose.json(user)
  } catch (err) {
    return respose.status(400).json({ error: err.message })
  }
})

export default usersRouter
