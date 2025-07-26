import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailsService } from './mail.service';
import { MailsController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([]),
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: config.get('EMAIL_USERNAME'),
                        pass: config.get('EMAIL_PASSWORD'),
                    },
                },
                defaults: {
                    from: '"No Reply" <no-reply@example.com>',
                },
            }),
        })
    ],
    providers: [MailsService],
    exports: [MailsService],
    controllers: [MailsController],
})
export class MailsModule {

}