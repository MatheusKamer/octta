import { Module } from '@nestjs/common';
import { ContactModule } from './modules/contact/contact.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [ContactModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
