import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [NewsModule, StudentModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
