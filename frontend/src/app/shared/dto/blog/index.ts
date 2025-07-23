export interface CreateBlog {
    title: string;
    slug: string;
    description: string;
    content: string;
    coverImage: string;
    publishedAt: Date;
    tags: string[];
    viewCount: number;
    createdAt: Date;
}

export interface UpdateBlog {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    coverImage: string;
    publishedAt: Date;
    tags: string[];
    viewCount: number;
    updatedAt: Date;
}

export interface Blog {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    coverImage: string;
    publishedAt: Date;
    tags: string[];
    viewCount: number;
    cretedAt: Date;
    updatedAt: Date;
}