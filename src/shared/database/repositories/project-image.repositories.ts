import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class ProjectImagesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ProjectImageCreateArgs) {
    return this.prismaService.projectImage.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.ProjectImageFindUniqueArgs) {
    return this.prismaService.projectImage.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.ProjectImageFindManyArgs) {
    return this.prismaService.projectImage.findMany(findManyDto);
  }

  update(updateDto: Prisma.ProjectImageUpdateArgs) {
    return this.prismaService.projectImage.update(updateDto);
  }

  delete(deleteDto: Prisma.ProjectImageDeleteArgs) {
    return this.prismaService.projectImage.delete(deleteDto);
  }
}
