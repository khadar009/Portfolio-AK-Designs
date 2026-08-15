export type ThemeMode = 'light' | 'dark';

export type ServiceCategory = 'Product Design' | 'UI/UX' | 'Branding' | 'Visual & Graphic Design' | 'UI/UX Designing' | 'Graphic Design';

export interface ServiceItem {
  id: string;
  title: ServiceCategory;
  tagline: string;
  description: string;
  badge: string;
  icon: string;
  deliverables?: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  outputArtifact: string;
  keyActivities?: string[];
}

export interface WhyMePoint {
  title: string;
  subtitle: string;
  description: string;
  impactMetric: string;
  icon: string;
  image?: string;
  tags?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  metric?: string;
  metricLabel?: string;
  projectType: string;
  image?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ServiceCategory;
  tags: string[];
  year: string;
  image: string;
  client: string;
  clientType: 'Startup' | 'Medium-Scale Industry' | 'Enterprise';
  metrics: ProjectMetric[];
  problem: string;
  research: string;
  solution: string;
  impact: string;
  outcome: string;
  galleryImages: string[];
  featured?: boolean;
}
