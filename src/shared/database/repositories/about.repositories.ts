import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class AboutRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AboutCreateArgs) {
    return this.prismaService.about.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.AboutFindUniqueArgs) {
    return this.prismaService.about.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.AboutUpdateArgs) {
    return this.prismaService.about.update(updateDto);
  }
}
