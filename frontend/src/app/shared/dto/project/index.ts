export interface Project {
    _id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    githubUrl?: string | null;
    liveDemoUrl?: string | null;
    createdAt: Date;
    updatedAt: Date;
}