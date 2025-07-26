import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { ProjectsService } from './project.service';
import { ProjectsController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Project])],
    providers: [ProjectsService],
    exports: [ProjectsService],
    controllers: [ProjectsController],
})
export class ProjectsModule { }
