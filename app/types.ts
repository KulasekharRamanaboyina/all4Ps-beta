export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  titleCTA: {
    label: string;
    link: string;
  };
  intro: string;
  features: string[];
  outcomesHeading: string;
  outcomesHeadingMetrics: { label: string; value: string }[];
  outComesHeadingImage: string;
  iconName: string;
  bottomCTA: {
    heading: string;
    subText: string;
    label: string;
    link: string; // always /contact
  };

  // Case studies in services
  caseStudyIds?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  sarcasticFact: string;
  imageUrl: string;
}
export type StrategyType =
  | "brand"
  | "gtm"
  | "content"
  | "growth"
  | "digital"
  | "performance"
  | "thought-leadership";

export interface StrategyPillarIcon {
  strategyType?: StrategyType;
  title: string;
  points: string[];
  outcome?: {
    label: string;
    value: string;
  };
}

export interface PerformanceMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  description: string;
  industry: string;
  title: string;
  performanceMetrics?: PerformanceMetric[];
  pillars?: StrategyPillarIcon[];
  challenge: string;
  challengeImage: string;
  result: string;
  imageUrl: string;
  category: string;
  systemicResult: string;
}

export interface JobPosition {
  id: string;
  title: string;
  subtitle: string;
  department: string;
  location: string;
  type: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}
export interface ServiceCaseStudyPreview {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  category: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: any;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface DetailedBlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  mainImage: any;
  featured: boolean;
  author: BlogAuthor;
  takeaways?: string[];
  body: any;
}
