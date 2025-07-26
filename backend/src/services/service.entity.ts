import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('services')
export class Service {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    icon: string;

    @Column()
    slug: string;

    @Column()
    order: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
