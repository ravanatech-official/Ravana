export type Language = 'en' | 'si';
export type Currency = 'LKR' | 'USD' | 'EUR' | 'GBP';

export type IntentType = 
  | 'website' 
  | 'ai' 
  | 'demos' 
  | 'sales' 
  | 'consultation';

export interface ProjectSnapshotData {
  industry: string;
  goal: string;
  features: string[];
  timeline: string;
  budgetRange: string;
  currency: Currency;
  estimatedPrice: string;
  recommendedSolution: string;
  conceptMatch?: string;
  clientName?: string;
  clientPhone?: string;
  clientNotes?: string;
  referenceDemoId?: string;
  timestamp: string;
  snapshotId: string;
}

export interface ConceptualProject {
  id: string;
  title: string;
  titleSi: string;
  category: string;
  categorySi: string;
  tagline: string;
  taglineSi: string;
  description: string;
  descriptionSi: string;
  keyFeatures: string[];
  keyFeaturesSi: string[];
  conversionTech: string[];
  metrics: {
    conversionRate: string;
    loadSpeed: string;
    roiExpectation: string;
  };
  sampleItems: {
    name: string;
    price: string;
    detail: string;
  }[];
  heroGradient: string;
  accentColor: string;
  iconName: string;
}

export interface QuestionStep {
  id: string;
  titleEn: string;
  titleSi: string;
  subtitleEn: string;
  subtitleSi: string;
  options: {
    id: string;
    labelEn: string;
    labelSi: string;
    icon?: string;
    descriptionEn?: string;
    descriptionSi?: string;
    suggestedDemoId?: string;
  }[];
}
