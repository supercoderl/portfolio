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
import { CreateServiceDto } from './dto/create-service.dto';
import { ServicesService } from './service.service';
import { Service } from './service.entity';
import { RemoveServiceDto } from './dto/remove-service.dto';
import { RetrieveServiceDto } from './dto/retrieve-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { FindServiceDto } from './dto/find-service.dto';
@ApiTags('Service')
@Controller('api/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  // Add
  @Post()
  @ApiOperation({ summary: 'Add new service' })
  async create(@Body() createServiceDto: CreateServiceDto): Promise<Service> {
    return await this.servicesService.create(createServiceDto);
  }

  // Delete
  @Delete()
  @ApiOperation({ summary: 'Delete service' })
  async remove(
    @Body() removeServiceDto: RemoveServiceDto,
    @Request() req,
  ): Promise<any> {
    // Log({ req });
    return await this.servicesService.delete(removeServiceDto);
  }

  // Update
  @Put(':id')
  @ApiOperation({ summary: 'Update service' })
  async update(
    @Param() params: RetrieveServiceDto,
    @Body() updateServiceDto: UpdateServiceDto,
  ): Promise<any> {
    return await this.servicesService.update({
      id: params.id,
      updateServiceDto,
    });
  }

  // List
  @Get()
  @ApiOperation({ summary: 'Get a list of services' })
  async findAll(@Query() query: FindServiceDto): Promise<Service> {
    return await this.servicesService.findAll(query);
  }

  // Search by id
  @Get(':id')
  @ApiOperation({ summary: 'Search an service by id' })
  async findOneById(@Param() params: RetrieveServiceDto): Promise<any> {
    return await this.servicesService.findOneById(params.id);
  }

  // Quantity
  @Get('list/count')
  @ApiOperation({ summary: 'Count quantity of services' })
  async getCount() {
    return await this.servicesService.getCount();
  }
}
