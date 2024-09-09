import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class ProjectsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ProjectCreateArgs) {
    return this.prismaService.project.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.ProjectFindUniqueArgs) {
    return this.prismaService.project.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.ProjectFindManyArgs) {
    return this.prismaService.project.findMany(findManyDto);
  }

  update(updateDto: Prisma.ProjectUpdateArgs) {
    return this.prismaService.project.update(updateDto);
  }

  delete(deleteDto: Prisma.ProjectDeleteArgs) {
    return this.prismaService.project.delete(deleteDto);
  }
}
