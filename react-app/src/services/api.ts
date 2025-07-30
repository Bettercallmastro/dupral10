import { PageData } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_DRUPAL_URL || 'http://homework10.ddev.site';

export class ApiService {
  private static instance: ApiService;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = API_BASE_URL;
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  /**
   * Recupera i dati della pagina dall'API JSON di Drupal
   */
  async getPageData(): Promise<PageData> {
    try {
      const response = await fetch(`${this.baseUrl}/api/page-data`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        cache: 'no-store', // Disable caching for development
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return this.transformPageData(data);
    } catch (error) {
      console.error('Error fetching page data:', error);
      // Return mock data for development/fallback
      return this.getMockPageData();
    }
  }

  /**
   * Trasforma i dati ricevuti da Drupal nel formato richiesto
   */
  private transformPageData(data: any): PageData {
    return {
      header: {
        logo: data.header?.logo || 'AQ',
        siteName: data.header?.siteName || 'AQ Website',
        menuItems: data.header?.menuItems || [
          { title: 'Home', url: '/' },
          { title: 'About', url: '/about' },
          { title: 'Services', url: '/services' },
          { title: 'Portfolio', url: '/portfolio' },
          { title: 'Blog', url: '/blog' },
          { title: 'Contact', url: '/contact' },
        ],
        searchPlaceholder: data.header?.searchPlaceholder || 'Cerca',
        contactButton: data.header?.contactButton || 'Contattaci',
        languages: data.header?.languages || [
          { code: 'IT', name: 'Italiano' },
          { code: 'EN', name: 'English' },
          { code: 'FR', name: 'Français' },
          { code: 'DE', name: 'Deutsch' },
        ],
      },
      hero: {
        label: data.hero?.label || 'Welcome',
        heading: data.hero?.heading || 'Build Amazing Websites',
        subtitle: data.hero?.subtitle || 'Create stunning web experiences with modern technologies',
        image: data.hero?.image || '/images/image_default.png',
        buttons: data.hero?.buttons || [
          { text: 'Get Started', active: true, url: '/get-started' },
          { text: 'Learn More', active: false, url: '/learn-more' },
        ],
      },
      textButtonsSection: {
        label: data.textButtonsSection?.label || 'Label',
        heading: data.textButtonsSection?.heading || 'Heading',
        body: data.textButtonsSection?.body || 'Body',
        bodySmall: data.textButtonsSection?.bodySmall || 'Body small',
        buttons: data.textButtonsSection?.buttons || [
          { text: 'Button', active: true, url: '/action1' },
          { text: 'Button', active: false, url: '/action2' },
        ],
      },
      textImageSection: {
        label: data.textImageSection?.label || 'Label',
        heading: data.textImageSection?.heading || 'Heading',
        body: data.textImageSection?.body || 'Body',
        bodySmall: data.textImageSection?.bodySmall || 'Body small',
        image: data.textImageSection?.image || '/images/image_default.png',
        imageDescription: data.textImageSection?.imageDescription || 'Lorem ipsum dolor sit amet',
        buttons: data.textImageSection?.buttons || [
          { text: 'Button', active: true, url: '/action1' },
          { text: 'Button', active: false, url: '/action2' },
        ],
      },
      backgroundSection: {
        label: data.backgroundSection?.label || 'Label',
        heading: data.backgroundSection?.heading || 'Heading',
        body: data.backgroundSection?.body || 'Body',
        bodySmall: data.backgroundSection?.bodySmall || 'Body small',
        backgroundImage: data.backgroundSection?.backgroundImage || '/images/image_default.png',
        buttons: data.backgroundSection?.buttons || [
          { text: 'Button', active: true, url: '/action1' },
          { text: 'Button', active: false, url: '/action2' },
        ],
      },
      cardGrid: {
        title: data.cardGrid?.title || 'Our Services',
        description: data.cardGrid?.description || 'Discover what we can do for you',
        cards: data.cardGrid?.cards || [],
      },
      footer: {
        logo: data.footer?.logo || 'AQ',
        siteName: data.footer?.siteName || 'AQ Website',
        description: data.footer?.description || 'Building the future of web development',
        menuColumns: data.footer?.menuColumns || [
          {
            title: 'Company',
            links: [
              { title: 'About Us', url: '/about' },
              { title: 'Team', url: '/team' },
              { title: 'Careers', url: '/careers' },
            ],
          },
          {
            title: 'Services',
            links: [
              { title: 'Web Development', url: '/services/web' },
              { title: 'Design', url: '/services/design' },
              { title: 'Consulting', url: '/services/consulting' },
            ],
          },
        ],
        socialIcons: data.footer?.socialIcons || [
          { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
          { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
          { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
        ],
        copyright: data.footer?.copyright || '© 2024 AQ Website. All rights reserved.',
        legalLinks: data.footer?.legalLinks || [
          { title: 'Privacy Policy', url: '/privacy' },
          { title: 'Terms of Service', url: '/terms' },
        ],
      },
    };
  }

  /**
   * Dati mock per sviluppo e fallback
   */
  private getMockPageData(): PageData {
    const mockPageData: PageData = {
      header: {
        logo: 'AQ',
        siteName: 'AQ Website',
        menuItems: [
          { title: 'Home', url: '/' },
          { title: 'About', url: '/about' },
          { title: 'Services', url: '/services' },
          { title: 'Portfolio', url: '/portfolio' },
          { title: 'Blog', url: '/blog' },
          { title: 'Contact', url: '/contact' }
        ],
        searchPlaceholder: 'Cerca',
        contactButton: 'Contattaci',
        languages: [
          { code: 'IT', name: 'Italiano' },
          { code: 'EN', name: 'English' },
          { code: 'FR', name: 'Français' },
          { code: 'DE', name: 'Deutsch' }
        ]
      },
      textButtonsSection: {
        label: 'Label',
        heading: 'Heading',
        body: 'Body',
        bodySmall: 'Body small',
        buttons: [
          { text: 'Button', url: '#', active: true },
          { text: 'Button', url: '#', active: false }
        ]
      },
      hero: {
        label: 'Welcome',
        heading: 'Build Amazing Websites',
        subtitle: 'Create stunning web experiences with modern technologies',
        image: '/images/image_default.png',
        buttons: [
          { text: 'Get Started', active: true, url: '/get-started' },
          { text: 'Learn More', active: false, url: '/learn-more' }
        ]
      },
      headingButtonsImageSection: {
        label: 'Label',
        heading: 'Heading',
        body: 'Body',
        bodySmall: 'Body small',
        buttons: [
          { text: 'Button', url: '#', active: true },
          { text: 'Button', url: '#', active: false }
        ],
        image: '/images/image_default.png',
        imageDescription: 'Lorem ipsum dolor sit amet'
      },
      categorySlideSection: {
        label: 'Label',
        heading: 'Heading',
        body: 'Body',
        bodySmall: 'Body small',
        categories: [
          { id: '1', name: 'Category 1', active: true },
          { id: '2', name: 'Category 2', active: false },
          { id: '3', name: 'Category 3', active: false },
          { id: '4', name: 'Category 4', active: false },
          { id: '5', name: 'Category 5', active: false },
          { id: '6', name: 'Category 6', active: false }
        ],
        images: [
          { id: '1', src: 'https://picsum.photos/400/300?random=1', alt: 'Image 1', categoryId: '1' },
          { id: '2', src: 'https://picsum.photos/400/300?random=2', alt: 'Image 2', categoryId: '1' },
          { id: '3', src: 'https://picsum.photos/400/300?random=3', alt: 'Image 3', categoryId: '1' },
          { id: '4', src: 'https://picsum.photos/400/300?random=4', alt: 'Image 4', categoryId: '2' },
          { id: '5', src: 'https://picsum.photos/400/300?random=5', alt: 'Image 5', categoryId: '2' },
          { id: '6', src: 'https://picsum.photos/400/300?random=6', alt: 'Image 6', categoryId: '2' },
          { id: '7', src: 'https://picsum.photos/400/300?random=7', alt: 'Image 7', categoryId: '3' },
          { id: '8', src: 'https://picsum.photos/400/300?random=8', alt: 'Image 8', categoryId: '3' },
          { id: '9', src: 'https://picsum.photos/400/300?random=9', alt: 'Image 9', categoryId: '4' },
          { id: '10', src: 'https://picsum.photos/400/300?random=10', alt: 'Image 10', categoryId: '4' },
          { id: '11', src: 'https://picsum.photos/400/300?random=11', alt: 'Image 11', categoryId: '5' },
          { id: '12', src: 'https://picsum.photos/400/300?random=12', alt: 'Image 12', categoryId: '5' },
          { id: '13', src: 'https://picsum.photos/400/300?random=13', alt: 'Image 13', categoryId: '6' },
          { id: '14', src: 'https://picsum.photos/400/300?random=14', alt: 'Image 14', categoryId: '6' }
        ]
      },
      textImageSection: {
        label: 'Label',
        heading: 'Heading',
        body: 'Body',
        bodySmall: 'Body small',
        image: '/images/image_default.png',
        imageDescription: 'Lorem ipsum dolor sit amet',
        buttons: [
          { text: 'Button', active: true, url: '/action1' },
          { text: 'Button', active: false, url: '/action2' },
        ],
      },
      backgroundSection: {
        label: 'Label',
        heading: 'Heading',
        body: 'Body',
        bodySmall: 'Body small',
        backgroundImage: '/images/image_default.png',
        buttons: [
          { text: 'Button', active: true, url: '/action1' },
          { text: 'Button', active: false, url: '/action2' },
        ],
      },
      cardGrid: {
        title: 'Our Services',
        description: 'Discover our comprehensive range of services',
        cards: [
          {
            id: '1',
            heading: 'Custom Web Applications',
            subtitle: 'Build scalable and robust web applications',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service1' },
              { text: 'Button', active: false, url: '/service1-details' },
            ],
          },
          {
            id: '2',
            heading: 'UI/UX Design',
            subtitle: 'Create beautiful and intuitive user interfaces',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service2' },
              { text: 'Button', active: false, url: '/service2-details' },
            ],
          },
          {
            id: '3',
            heading: 'Digital Strategy',
            subtitle: 'Expert guidance for your digital transformation',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service3' },
              { text: 'Button', active: false, url: '/service3-details' },
            ],
          },
          {
            id: '4',
            heading: '24/7 Maintenance',
            subtitle: 'Keep your website running smoothly',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service4' },
              { text: 'Button', active: false, url: '/service4-details' },
            ],
          },
          {
            id: '5',
            heading: 'E-commerce Solutions',
            subtitle: 'Build powerful online stores',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service5' },
              { text: 'Button', active: false, url: '/service5-details' },
            ],
          },
          {
            id: '6',
            heading: 'Mobile Development',
            subtitle: 'Native and cross-platform mobile apps',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service6' },
              { text: 'Button', active: false, url: '/service6-details' },
            ],
          },
          {
            id: '7',
            heading: 'Cloud Infrastructure',
            subtitle: 'Scalable cloud solutions for your business',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service7' },
              { text: 'Button', active: false, url: '/service7-details' },
            ],
          },
          {
            id: '8',
            heading: 'SEO Optimization',
            subtitle: 'Improve your search engine rankings',
            description: 'Body small',
            image: 'https://picsum.photos/400/300',
            badge: 'BADGE',
            buttons: [
              { text: 'Button', active: true, url: '/service8' },
              { text: 'Button', active: false, url: '/service8-details' },
            ],
          },
        ],
      },
      footer: {
        logo: 'AQ',
        siteName: 'AQ Website',
        description: 'Building the future of web development',
        menuColumns: [
          {
            title: 'Company',
            links: [
              { title: 'About Us', url: '/about' },
              { title: 'Team', url: '/team' },
              { title: 'Careers', url: '/careers' },
            ],
          },
          {
            title: 'Services',
            links: [
              { title: 'Web Development', url: '/services/web' },
              { title: 'Design', url: '/services/design' },
              { title: 'Consulting', url: '/services/consulting' },
            ],
          },
        ],
        socialIcons: [
          { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
          { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
          { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
        ],
        copyright: '© 2024 AQ Website. All rights reserved.',
        legalLinks: [
          { title: 'Privacy Policy', url: '/privacy' },
          { title: 'Terms of Service', url: '/terms' },
        ],
      },
    };
    return mockPageData;
  }
}

export default ApiService.getInstance(); 