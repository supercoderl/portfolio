import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { RemoveBlogDto } from './dto/remove-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) { }

  // Add
  async create(createBlogDto: CreateBlogDto): Promise<any> {
    const blog = this.blogsRepository.create({
      ...createBlogDto,
      createdAt: createBlogDto.createdAt || new Date(),
      updatedAt: new Date(),
    });
    return await this.blogsRepository.save(blog);
  }

  // Delete
  async delete(removeBlogDto: RemoveBlogDto): Promise<any> {
    const { ids } = removeBlogDto;

    return this.blogsRepository.delete(ids);
  }

  // Update
  async update(updateBlogData): Promise<any> {
    const { id, updateBlogDto }: { id: string, updateBlogDto: UpdateBlogDto } = updateBlogData;

    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }

    updateBlogDto.updatedAt = new Date();

    return await this.blogsRepository.update(
      new ObjectId(id),
      updateBlogDto
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
      this.blogsRepository.find({
        where,
        order: { updatedAt: 'DESC' },
        skip,
        take: limit,
      }),
      this.blogsRepository.count(),
    ]);

    return {
      total,
      data,
    };
  }

  // Search by ID
  async findOneById(id: string): Promise<any> {
    return this.blogsRepository
      .findOneBy({
        _id: new ObjectId(id),
      })
  }

  // Quantity
  async getCount() {
    return await this.blogsRepository.count();
  }
}
