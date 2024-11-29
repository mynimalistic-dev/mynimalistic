import { ReactNode } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfoItem {
  icon: ReactNode;
  title: string;
  details: string[];
}
