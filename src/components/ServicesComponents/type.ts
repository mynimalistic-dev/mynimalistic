export interface Service {
  title: string;
  description: string;
  category: string;
  gradient: string;
}

export interface ServiceHeroProps {
  services: Service[];
}
