import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Experience } from './experience.entity';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { RemoveExperienceDto } from './dto/remove-experience.dto';
import { ObjectId } from 'mongodb';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectRepository(Experience)
    private experiencesRepository: Repository<Experience>,
  ) { }

  // Add
  async create(createExperienceDto: CreateExperienceDto): Promise<any> {
    const experience = this.experiencesRepository.create({
      ...createExperienceDto,
      createdAt: createExperienceDto.createdAt || new Date(),
      updatedAt: new Date(),
    });
    return await this.experiencesRepository.save(experience);
  }

  // Delete
  async delete(removeExperienceDto: RemoveExperienceDto): Promise<any> {
    const { ids } = removeExperienceDto;

    return this.experiencesRepository.delete(ids);
  }

  // Update
  async update(updateExperienceData): Promise<any> {
    const { id, updateExperienceDto }: { id: string, updateExperienceDto: UpdateExperienceDto } = updateExperienceData;

    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }

    updateExperienceDto.updatedAt = new Date();

    return await this.experiencesRepository.update(
      new ObjectId(id),
      updateExperienceDto
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
      this.experiencesRepository.find({
        where,
        order: { updatedAt: 'DESC' },
        skip,
        take: limit,
      }),
      this.experiencesRepository.count(),
    ]);

    return {
      total,
      data,
    };
  }

  // Search by ID
  async findOneById(id: string): Promise<any> {
    return this.experiencesRepository
      .findOneBy({
        _id: new ObjectId(id),
      })
  }

  // Quantity
  async getCount() {
    return await this.experiencesRepository.count();
  }
}
