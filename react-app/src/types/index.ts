// Tipi per i dati dell'API JSON di Drupal
export interface Button {
  text: string;
  active: boolean;
  url?: string;
}

export interface HeroSection {
  label: string;
  heading: string;
  subtitle: string;
  image: string;
  buttons: Button[];
}

export interface ContentSection {
  label: string;
  heading: string;
  subtitle: string;
  description?: string;
  image: string;
  buttons: Button[];
  imagePosition?: 'left' | 'right';
}

export interface TextImageSection {
  label: string;
  heading: string;
  body: string;
  bodySmall: string;
  image: string;
  imageDescription?: string;
  buttons: Button[];
}

export interface BackgroundSection {
  label: string;
  heading: string;
  body: string;
  bodySmall: string;
  backgroundImage: string;
  buttons: Button[];
}

export interface TextButtonsSection {
  label: string;
  heading: string;
  body: string;
  bodySmall?: string;
  buttons: Button[];
}

export interface HeadingButtonsImageSection {
  label: string;
  heading: string;
  body: string;
  bodySmall?: string;
  buttons: Button[];
  image: string;
  imageDescription?: string;
}

export interface CardItem {
  id: string;
  heading: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  buttons?: Button[];
}

export interface CardGrid {
  title: string;
  description: string;
  cards: CardItem[];
}

export interface HeaderData {
  logo: string;
  siteName: string;
  menuItems: Array<{
    title: string;
    url: string;
  }>;
  searchPlaceholder: string;
  contactButton: string;
  languages?: Array<{
    code: string;
    name: string;
  }>;
}

export interface FooterData {
  logo: string;
  siteName: string;
  description: string;
  menuColumns: Array<{
    title: string;
    links: Array<{
      title: string;
      url: string;
    }>;
  }>;
  socialIcons: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
  copyright: string;
  legalLinks: Array<{
    title: string;
    url: string;
  }>;
}

export interface PageData {
  header: HeaderData;
  textButtonsSection?: TextButtonsSection;
  hero: HeroSection;
  headingButtonsImageSection?: HeadingButtonsImageSection;
  categorySlideSection?: CategorySlideSection;
  textImageSection?: TextImageSection;
  backgroundSection?: BackgroundSection;
  cardGrid: CardGrid;
  footer: FooterData;
}

// Props per i componenti
export interface ButtonProps {
  text: string;
  active?: boolean;
  variant?: 'primary' | 'secondary' | 'black';
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  card: CardItem;
  className?: string;
}

export interface SectionProps {
  section: ContentSection;
  className?: string;
}

export interface TextButtonsSectionProps {
  section: TextButtonsSection;
  className?: string;
}

export interface HeadingButtonsImageSectionProps {
  section: HeadingButtonsImageSection;
  className?: string;
}

export interface CategorySlideSection {
  label: string;
  heading: string;
  body: string;
  bodySmall?: string;
  categories: Array<{
    id: string;
    name: string;
    active: boolean;
  }>;
  images: Array<{
    id: string;
    src: string;
    alt: string;
    categoryId: string;
  }>;
}

export interface CategorySlideSectionProps {
  section: CategorySlideSection;
  className?: string;
}

export interface TextImageSectionProps {
  section: TextImageSection;
  className?: string;
}

export interface BackgroundSectionProps {
  section: BackgroundSection;
  className?: string;
}

export interface HeroProps {
  hero: HeroSection;
  className?: string;
}

export interface HeaderProps {
  data: HeaderData;
  className?: string;
}

export interface FooterProps {
  data: FooterData;
  className?: string;
}

export interface SliderProps {
  cards: CardItem[];
  title?: string;
  description?: string;
  className?: string;
} 