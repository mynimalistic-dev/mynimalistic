export interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export interface SectionProps {
  title: string;
  content: string;
}

export interface ApproachItem {
  title: string;
  content: string;
}

export interface OurApproachProps {
  title: string;
  content: ApproachItem[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface WhyChooseUsProps {
  title: string;
  content: string;
  features: Feature[];
}

export interface ExpertiseItemProps {
  category: string;
  technology: string;
  description: string;
}

export interface ExpertiseSectionProps {
  expertiseItems: ExpertiseItemProps[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface OurTeamProps {
  teamMembers: TeamMember[];
}
