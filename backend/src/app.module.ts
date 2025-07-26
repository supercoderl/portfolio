import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Log4jsModule } from './libs/log4js';
import { ExperiencesModule } from './experiences/experience.module';
import { BlogsModule } from './blogs/blog.module';
import { MailsModule } from './mails/mail.module';
import configDefault from './config/config.default';
import { ServicesModule } from './services/service.module';
import { ProjectsModule } from './projects/project.module';

@Module({
  imports: [
    //Configuration module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
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
    MailsModule,
    ServicesModule,
    ProjectsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
