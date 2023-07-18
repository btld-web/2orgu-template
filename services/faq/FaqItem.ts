export interface FaqItem {
  open?: boolean;
}

export interface FaqItem {
  title?: string;
  description?: string;
  customerId?: string;
  languageCode?: string;
  section?: string;
  hide: boolean;
  createdBy?: string;
  creationDate?: Date;
  order: number;
  anchor?: string;
}