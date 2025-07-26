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
import { ProjectsService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.entity';
import { RemoveProjectDto } from './dto/remove-project.dto';
import { RetrieveProjectDto } from './dto/retrieve-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FindProjectDto } from './dto/find-project.dto';
@ApiTags('Project')
@Controller('api/projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    // Add
    @Post()
    @ApiOperation({ summary: 'Add new project' })
    async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
        return await this.projectsService.create(createProjectDto);
    }

    // Delete
    @Delete()
    @ApiOperation({ summary: 'Delete project' })
    async remove(
        @Body() removeProjectDto: RemoveProjectDto,
        @Request() req,
    ): Promise<any> {
        // Log({ req });
        return await this.projectsService.delete(removeProjectDto);
    }

    // Update
    @Put(':id')
    @ApiOperation({ summary: 'Update project' })
    async update(
        @Param() params: RetrieveProjectDto,
        @Body() updateProjectDto: UpdateProjectDto,
    ): Promise<any> {
        return await this.projectsService.update({
            id: params.id,
            updateProjectDto,
        });
    }

    // List
    @Get()
    @ApiOperation({ summary: 'Get a list of projects' })
    async findAll(@Query() query: FindProjectDto): Promise<Project> {
        return await this.projectsService.findAll(query);
    }

    // Search by id
    @Get(':id')
    @ApiOperation({ summary: 'Search an project by id' })
    async findOneById(@Param() params: RetrieveProjectDto): Promise<any> {
        return await this.projectsService.findOneById(params.id);
    }

    // Quantity
    @Get('list/count')
    @ApiOperation({ summary: 'Count quantity of projects' })
    async getCount() {
        return await this.projectsService.getCount();
    }
}
