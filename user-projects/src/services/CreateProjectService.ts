import { getRepository } from 'typeorm'
import Project from '../models/Project'

interface Request {
  name: string;
  user_id: string;
}
class CreateProjectService {
  public async execute ({ name, user_id }: Request): Promise<Project> {
    const projectsRepository = getRepository(Project)

    const projectCreated = await projectsRepository.findOne({
      where: { name }
    })

    if (projectCreated) {
      throw new Error('project already created')
    }

    const project = projectsRepository.create({
      name, user_id
    })

    await projectsRepository.save(project)

    return project
  }
}

export default CreateProjectService
