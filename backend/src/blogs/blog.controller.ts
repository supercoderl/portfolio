import {
    Controller,
    Post,
    Body,
    Request,
    Get,
    Delete,
    Put,
    Param,
    Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BlogsService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './blog.entity';
import { RemoveBlogDto } from './dto/remove-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { RetrieveBlogDto } from './dto/retrieve-blog.dto';
import { FindBlogDto } from './dto/find-blog.dto';
@ApiTags('Blog')
@Controller('api/blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService) { }

    // Add
    @Post()
    @ApiOperation({ summary: 'Add new blog' })
    async create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
        return await this.blogsService.create(createBlogDto);
    }

    // Delete
    @Delete()
    @ApiOperation({ summary: 'Delete blog' })
    async remove(
        @Body() removeBlogDto: RemoveBlogDto,
        @Request() req,
    ): Promise<any> {
        // Log({ req });
        return await this.blogsService.delete(removeBlogDto);
    }

    // Update
    @Put(':id')
    @ApiOperation({ summary: 'Update blog' })
    async update(
        @Param() params: RetrieveBlogDto,
        @Body() updateBlogDto: UpdateBlogDto,
    ): Promise<any> {
        return await this.blogsService.update({
            id: params.id,
            updateBlogDto,
        });
    }

    // List
    @Get()
    @ApiOperation({ summary: 'Get a list of blogs' })
    async findAll(@Query() query: FindBlogDto): Promise<Blog> {
        return await this.blogsService.findAll(query);
    }

    // Search by id
    @Get(':id')
    @ApiOperation({ summary: 'Search an blog by id' })
    async findOneById(@Param() params: RetrieveBlogDto): Promise<any> {
        return await this.blogsService.findOneById(params.id);
    }

    // Quantity
    @Get('list/count')
    @ApiOperation({ summary: 'Count quantity of blogs' })
    async getCount() {
        return await this.blogsService.getCount();
    }
}
