import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface ProjectHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
} 