export interface PestService {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'specialist';
  shortDesc: string;
  fullDesc: string;
  signsOfInfestation: string[];
  treatmentProcess: string[];
  warranty: string;
  priceFrom: number;
  promoPrice: number;
  popular?: boolean;
  iconName: string;
  imageHint: string;
  keyFeatures: string[];
}

export interface SuburbArea {
  name: string;
  postcode: string;
  region: 'Geelong & Surf Coast' | 'Melbourne West' | 'Inner West & Metro';
  sameDayAvailable: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  suburb: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'safety' | 'pricing' | 'warranty' | 'general';
}
