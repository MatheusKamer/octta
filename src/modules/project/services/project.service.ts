import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectsRepository } from 'src/shared/database/repositories/project.repositories';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepo: ProjectsRepository) {}

  create(createProjectDto: CreateProjectDto) {
    const { name, description, imageUrl, userId, isActive } = createProjectDto;

    return this.projectRepo.create({
      data: {
        name,
        description,
        imageUrl,
        userId,
        isActive,
      },
    });
  }

  findAll() {
    return this.projectRepo.findMany({});
  }

  findOne(id: string) {
    return this.projectRepo.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    const { name, description, imageUrl, isActive } = updateProjectDto;

    return this.projectRepo.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        imageUrl,
        isActive,
      },
    });
  }

  remove(id: string) {
    return this.projectRepo.delete({
      where: {
        id,
      },
    });
  }
}
