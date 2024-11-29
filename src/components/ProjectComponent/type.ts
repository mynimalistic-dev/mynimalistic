export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  featured: boolean;
  stats?: {
    stars?: number;
    views?: number;
    likes?: number;
  };
}
