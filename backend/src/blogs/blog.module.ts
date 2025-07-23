import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { BlogsService } from './blog.service';
import { BlogsController } from './blog.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Blog])],
    providers: [BlogsService],
    exports: [BlogsService],
    controllers: [BlogsController],
})
export class BlogsModule { }
