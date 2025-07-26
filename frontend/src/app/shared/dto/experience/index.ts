export interface CreateExperience {
    company: string;
    title: string;
    description: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    order: number;
    createdAt: Date;
}

export interface UpdateExperience {
    id: string;
    company: string;
    title: string;
    description: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    order: number;
    updatedAt: Date;
}

export interface Experience {
    _id: string;
    company: string;
    title: string;
    description: string;
    content: string;
    startDate: string;
    endDate?: string;
    technologies: string[];
    responsibilities: string[];
    archivements: string[];
    isCurrent: boolean;
    order: number;
    cretedAt: Date;
    updatedAt: Date;
}