export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  photo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface Statistic {
  id: string;
  value: number;
  label: string;
  icon: string;
}
