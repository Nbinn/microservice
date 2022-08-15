import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

import { MailService } from './mail.service';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({
    path: `.env${process.env.ENV ? `.${process.env.ENV}` : ''}`,
});
const { ENV } = process.env;

@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: async () => ({
                transport: {
                    host: process.env.MAIL_HOST,
                    secure: false,
                    auth: {
                        user: process.env.MAIL_USER,
                        pass: process.env.MAIL_PASSWORD,
                    },
                },
                defaults: {
                    from: `"Metabase" <${process.env.MAIL_FROM}>`,
                },
                template: {
                    dir: join(__dirname, 'templates'),
                    adapter: new HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        }),
        ConfigModule.forRoot({
            envFilePath: [`.env${ENV ? `.${ENV}` : ''}`],
        }),
    ],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule { }