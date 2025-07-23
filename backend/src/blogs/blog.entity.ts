import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('blogs')
export class Blog {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    title: string;

    @Column()
    slug: string;

    @Column()
    description: string;

    @Column()
    content: string;

    @Column()
    coverImage: string;

    @Column()
    publishedAt: Date;

    @Column()
    tags: string[];

    @Column()
    viewCount: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
