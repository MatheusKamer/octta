import { Module } from '@nestjs/common';
import { ContactModule } from './modules/contact/contact.module';
import { DatabaseModule } from './shared/database/database.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [ContactModule, DatabaseModule, ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
