import { Module } from '@nestjs/common';
import { ContactModule } from './modules/contact/contact.module';
import { DatabaseModule } from './shared/database/database.module';
import { ProjectModule } from './modules/project/project.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';

@Module({
  imports: [ContactModule, DatabaseModule, ProjectModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
