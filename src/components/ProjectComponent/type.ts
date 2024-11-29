export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  stats?: {
    stars: number;
    views: number;
    likes: number;
  };
}
