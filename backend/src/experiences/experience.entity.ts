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
    startDate: string;

    @Column({ nullable: true })
    endDate?: string;

    @Column()
    isCurrent: boolean;

    @Column()
    order: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
