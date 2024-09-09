import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class ContactRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ContactCreateArgs) {
    return this.prismaService.contact.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.ContactFindUniqueArgs) {
    return this.prismaService.contact.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.ContactUpdateArgs) {
    return this.prismaService.contact.update(updateDto);
  }
}
