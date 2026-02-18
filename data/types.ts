// ============================
// Product Types
// ============================
export type ProductCategory = 'flavors' | 'presentations' | 'bulk';

export interface FlavorProduct {
  name: string;
  color: string;
  desc: string;
  icon: string;
}

export interface OtherProduct {
  name: string;
  emoji: string;
  desc: string;
}

export interface ProductCategoryTab {
  key: ProductCategory;
  label: string;
}

// ============================
// Blog Types
// ============================
export type BlogCategory = 'All' | 'Flavor Story' | 'Heritage' | 'Behind the Scenes' | 'Community';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: BlogCategory;
  readTime: string;
  image: string;
}

// ============================
// Recipe Types
// ============================
export interface Recipe {
  id: number;
  title: string;
  excerpt: string;
  prepTime: string;
  difficulty: string;
  emoji: string;
  ingredients: string[];
}

export interface TipCard {
  emoji: string;
  title: string;
  description: string;
  gradient: string;
}

// ============================
// About Page Types
// ============================
export interface TimelineEntry {
  year: string;
  gradient: string;
  bgColor: string;
  borderColor: string;
  title: string;
  description: string;
  yearTextSize: string;
}

export interface ValueCard {
  emoji: string;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

export interface StatItem {
  value: string;
  label: string;
  color?: string;
}

// ============================
// Home Page Types
// ============================
export interface FlavorHighlight {
  name: string;
  color: string;
}

export interface FeatureCardData {
  emoji: string;
  title: string;
  description: string;
  borderColor: string;
}

// ============================
// Navigation Types
// ============================
export interface NavLink {
  href: string;
  label: string;
}

// ============================
// Contact Types
// ============================
export type ContactType = 'consumer' | 'distributor';

export interface ContactFormData {
  name: string;
  email: string;
  business?: string;
  businessType?: string;
  location?: string;
  message: string;
  contactType: ContactType;
}
