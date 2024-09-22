import { Module } from '@nestjs/common';
import { ProjectService } from './services/project.service';
import { ProjectController } from './project.controller';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
