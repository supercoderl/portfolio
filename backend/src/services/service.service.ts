import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Service } from './service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { RemoveServiceDto } from './dto/remove-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepository: Repository<Service>,
  ) { }

  // Add
  async create(createServiceDto: CreateServiceDto): Promise<any> {
    const service = this.servicesRepository.create({
      ...createServiceDto,
      createdAt: createServiceDto.createdAt || new Date(),
      updatedAt: new Date(),
    });
    return await this.servicesRepository.save(service);
  }

  // Delete
  async delete(removeServiceDto: RemoveServiceDto): Promise<any> {
    const { ids } = removeServiceDto;

    return this.servicesRepository.delete(ids);
  }

  // Update
  async update(updateServiceData): Promise<any> {
    const { id, updateServiceDto }: { id: string, updateServiceDto: UpdateServiceDto } = updateServiceData;

    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }

    updateServiceDto.updatedAt = new Date();

    return await this.servicesRepository.update(
      new ObjectId(id),
      updateServiceDto
    );
  }

  // List
  async findAll(query: any): Promise<any> {
    const keyword = query.keyword || '';
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (keyword) {
      where.name = { $regex: keyword, $options: 'i' };
    }

    const [data, total] = await Promise.all([
      this.servicesRepository.find({
        where,
        order: { updatedAt: 'DESC' },
        skip,
        take: limit,
      }),
      this.servicesRepository.count(),
    ]);

    return {
      total,
      data,
    };
  }

  // Search by ID
  async findOneById(id: string): Promise<any> {
    return this.servicesRepository
      .findOneBy({
        _id: new ObjectId(id),
      })
  }

  // Quantity
  async getCount() {
    return await this.servicesRepository.count();
  }
}
