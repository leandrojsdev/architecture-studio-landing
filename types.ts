export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ServiceProcess {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface LeadFormData {
  name: string;
  contact: string;
  projectType: string;
  city: string;
}

export enum AnalyticsEvent {
  CTA_CLICK = 'cta_click',
  WHATSAPP_CLICK = 'whatsapp_click',
  FORM_START = 'form_start',
  FORM_SUBMIT = 'form_submit',
  SCROLL_DEPTH = 'scroll_depth',
  PORTFOLIO_CLICK = 'portfolio_click',
  SOCIAL_CLICK = 'social_click',
}

export enum TrackingKey {
  PROJECT_TYPE = 'project_type',
  LOCATION = 'location',
  LABEL = 'label',
  DEPTH = 'depth',
  FIELD = 'field',
  PROJECT_TITLE = 'project_title',
  CATEGORY = 'category',
  PLATFORM = 'platform',
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}