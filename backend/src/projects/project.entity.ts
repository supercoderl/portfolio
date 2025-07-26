import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('projects')
export class Project {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    imageUrl: string;

    @Column({ nullable: true })
    githubUrl?: string;

    @Column({ nullable: true })
    liveDemoUrl?: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
