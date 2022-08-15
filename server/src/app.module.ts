import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './Mail/mail.module';

const { ENV } = process.env;
@Module({
  imports: [
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
