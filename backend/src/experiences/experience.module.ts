import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from './experience.entity';
import { ExperiencesService } from './experience.service';
import { ExperiencesController } from './experience.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Experience])],
    providers: [ExperiencesService],
    exports: [ExperiencesService],
    controllers: [ExperiencesController],
})
export class ExperiencesModule { }
