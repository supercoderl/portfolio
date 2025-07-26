import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { RemoveProjectDto } from './dto/remove-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectsRepository: Repository<Project>,
    ) { }

    // Add
    async create(createProjectDto: CreateProjectDto): Promise<any> {
        const project = this.projectsRepository.create({
            ...createProjectDto,
            createdAt: createProjectDto.createdAt || new Date(),
            updatedAt: new Date(),
        });
        return await this.projectsRepository.save(project);
    }

    // Delete
    async delete(removeProjectDto: RemoveProjectDto): Promise<any> {
        const { ids } = removeProjectDto;

        return this.projectsRepository.delete(ids);
    }

    // Update
    async update(updateProjectData): Promise<any> {
        const { id, updateProjectDto }: { id: string, updateProjectDto: UpdateProjectDto } = updateProjectData;

        if (!ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid ID format');
        }

        updateProjectDto.updatedAt = new Date();

        return await this.projectsRepository.update(
            new ObjectId(id),
            updateProjectDto
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
            this.projectsRepository.find({
                where,
                order: { updatedAt: 'DESC' },
                skip,
                take: limit,
            }),
            this.projectsRepository.count(),
        ]);

        return {
            total,
            data,
        };
    }

    // Search by ID
    async findOneById(id: string): Promise<any> {
        return this.projectsRepository
            .findOneBy({
                _id: new ObjectId(id),
            })
    }

    // Quantity
    async getCount() {
        return await this.projectsRepository.count();
    }
}
