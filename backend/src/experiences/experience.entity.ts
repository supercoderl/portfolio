import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('experiences')
export class Experience {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    company: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    content: string;

    @Column()
    startDate: string;

    @Column({ nullable: true })
    endDate?: string;

    @Column()
    technologies: string[];

    @Column()
    responsibilities: string[];

    @Column()
    archivements: string[];

    @Column()
    isCurrent: boolean;

    @Column()
    order: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
