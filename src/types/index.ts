export type CategoryType =
  | 'content'
  | 'design'
  | 'digital-ads'
  | 'automation'
  | 'data'
  | 'dashboard';

export type ResourceType =
  | 'course'
  | 'document'
  | 'tool'
  | 'template'
  | 'video';

export type DifficultyLevel =
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export interface Author {
  name: string;
  profileUrl?: string;
  avatar?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  type: ResourceType;
  url: string;
  author: Author;
  source: string;
  tags: string[];
  difficulty?: DifficultyLevel;
  language: string;
  isPaid: boolean;
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  likes: number;
}

export interface Category {
  id: CategoryType;
  name: string;
  slug: string;
  icon: string;
  description: string;
  resourceCount: number;
}
