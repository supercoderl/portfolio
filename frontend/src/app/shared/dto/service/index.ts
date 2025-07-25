export interface Service {
    _id: string;
    title: string;
    description: string;
    icon: string;
    slug: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}