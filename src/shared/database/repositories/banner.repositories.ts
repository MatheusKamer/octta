import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BannerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.BannerCreateArgs) {
    return this.prismaService.banner.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.BannerFindUniqueArgs) {
    return this.prismaService.banner.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.BannerUpdateArgs) {
    return this.prismaService.banner.update(updateDto);
  }
}
