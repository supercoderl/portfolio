import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailsService } from './mail.service';
import { MailsController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
        MailerModule.forRoot({
            transport: {
                host: process.env.EMAIL_HOST,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
            },
        })
    ],
    providers: [MailsService],
    exports: [MailsService],
    controllers: [MailsController],
})
export class MailsModule { }
