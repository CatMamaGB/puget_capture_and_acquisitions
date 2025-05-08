export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  benefits: string[];
}

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}