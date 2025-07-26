import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServicesService } from './service.service';
import { ServicesController } from './service.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Service])],
    providers: [ServicesService],
    exports: [ServicesService],
    controllers: [ServicesController],
})
export class ServicesModule { }
