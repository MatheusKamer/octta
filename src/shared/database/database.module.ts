import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { UsersRepository } from './repositories/user.repositories';
import { ContactRepository } from './repositories/contact.repositories';
import { ProjectsRepository } from './repositories/project.repositories';
import { ProjectImagesRepository } from './repositories/project-image.repositories';
import { AboutRepository } from './repositories/about.repositories';
import { BannerRepository } from './repositories/banner.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    ContactRepository,
    ProjectsRepository,
    ProjectImagesRepository,
    AboutRepository,
    BannerRepository,
  ],
  exports: [
    UsersRepository,
    ContactRepository,
    ProjectsRepository,
    ProjectImagesRepository,
    AboutRepository,
    BannerRepository,
  ],
})
export class DatabaseModule {}
