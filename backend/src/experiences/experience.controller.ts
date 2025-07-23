import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Log } from 'src/libs/utils';
import { ExperiencesService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { Experience } from './experience.entity';
import { RemoveExperienceDto } from './dto/remove-experience.dto';
import { RetrieveExperienceDto } from './dto/retrieve-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { FindExperienceDto } from './dto/find-experience.dto';
@ApiTags('Experience')
@Controller('api/experiences')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  // Add
  @Post()
  @ApiOperation({ summary: 'Add new experience' })
  async create(@Body() createExperienceDto: CreateExperienceDto): Promise<Experience> {
    return await this.experiencesService.create(createExperienceDto);
  }

  // Delete
  @Delete()
  @ApiOperation({ summary: 'Delete experience' })
  async remove(
    @Body() removeExperienceDto: RemoveExperienceDto,
    @Request() req,
  ): Promise<any> {
    // Log({ req });
    return await this.experiencesService.delete(removeExperienceDto);
  }

  // Update
  @Put(':id')
  @ApiOperation({ summary: 'Update experience' })
  async update(
    @Param() params: RetrieveExperienceDto,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ): Promise<any> {
    return await this.experiencesService.update({
      id: params.id,
      updateExperienceDto,
    });
  }

  // List
  @Get()
  @ApiOperation({ summary: 'Get a list of experiences' })
  async findAll(@Query() query: FindExperienceDto): Promise<Experience> {
    return await this.experiencesService.findAll(query);
  }

  // Search by id
  @Get(':id')
  @ApiOperation({ summary: 'Search an experience by id' })
  async findOneById(@Param() params: RetrieveExperienceDto): Promise<any> {
    return await this.experiencesService.findOneById(params.id);
  }

  // Quantity
  @Get('list/count')
  @ApiOperation({ summary: 'Count quantity of experiences' })
  async getCount() {
    return await this.experiencesService.getCount();
  }
}
