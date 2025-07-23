import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import configDefault from 'config/config.default';
import { join } from 'path';
import { Log4jsModule } from './libs/log4js';
import { ExperiencesController } from './experiences/experience.controller';
import { ExperiencesModule } from './experiences/experience.module';
import { BlogsModule } from './blogs/blog.module';
import { MailsModule } from './mails/mail.module';

@Module({
  imports: [
    //Configuration module
    ConfigModule.forRoot({
      isGlobal: false,
      load: [configDefault]
    }),
    // TypeOrm module
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get('mongo.host'),
        synchronize: true,
        ssl: true,
        autoLoadEntities: true,
        keepConnectionAlive: true
      })
    }),
    // Static resource module
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/'
    }, {
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads'
    }),
    //Log module
    Log4jsModule.forRoot(),
    //Business module...
    ExperiencesModule,
    BlogsModule,
    MailsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
