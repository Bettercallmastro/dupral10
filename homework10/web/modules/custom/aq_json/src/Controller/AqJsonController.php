<?php

namespace Drupal\aq_json\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Core\Controller\ControllerBase;

class AqJsonController extends ControllerBase {
  public function getJson() {
    $data = [
      'header' => [
        'logo' => 'AQ',
        'siteName' => 'AQ Website',
        'menuItems' => [
          ['title' => 'Home', 'url' => '/'],
          ['title' => 'About', 'url' => '/about'],
          ['title' => 'Services', 'url' => '/services'],
          ['title' => 'Portfolio', 'url' => '/portfolio'],
          ['title' => 'Blog', 'url' => '/blog'],
          ['title' => 'Contact', 'url' => '/contact'],
        ],
        'searchPlaceholder' => 'Cerca',
        'contactButton' => 'Contattaci',
        'languages' => [
          ['code' => 'IT', 'name' => 'Italiano'],
          ['code' => 'EN', 'name' => 'English'],
          ['code' => 'FR', 'name' => 'Français'],
          ['code' => 'DE', 'name' => 'Deutsch'],
        ],
      ],
      'hero' => [
        'label' => 'Welcome',
        'heading' => 'Build Amazing Websites',
        'subtitle' => 'Create stunning web experiences with modern technologies',
        'image' => 'https://picsum.photos/1200/600?random=1',
        'buttons' => [
          ['text' => 'Get Started', 'active' => true, 'url' => '/get-started'],
          ['text' => 'Learn More', 'active' => false, 'url' => '/learn-more'],
        ],
      ],
      'textButtonsSection' => [
        'label' => 'Our Services',
        'heading' => 'What We Do',
        'body' => 'We provide comprehensive web development services',
        'bodySmall' => 'From design to deployment, we handle everything',
        'buttons' => [
          ['text' => 'View Services', 'active' => true, 'url' => '/services'],
          ['text' => 'Get Quote', 'active' => false, 'url' => '/quote'],
        ],
      ],
      'textImageSection' => [
        'label' => 'About Us',
        'heading' => 'Your Digital Partner',
        'body' => 'We help businesses grow with innovative digital solutions',
        'bodySmall' => 'Trusted by companies worldwide',
        'image' => 'https://picsum.photos/600/400?random=2',
        'imageDescription' => 'Our team at work',
        'buttons' => [
          ['text' => 'Learn More', 'active' => true, 'url' => '/about'],
          ['text' => 'Contact Us', 'active' => false, 'url' => '/contact'],
        ],
      ],
      'backgroundSection' => [
        'label' => 'Our Work',
        'heading' => 'Featured Projects',
        'body' => 'Discover our latest work and success stories',
        'bodySmall' => 'Innovative solutions for modern businesses',
        'backgroundImage' => 'https://picsum.photos/1200/400?random=3',
        'buttons' => [
          ['text' => 'View Portfolio', 'active' => true, 'url' => '/portfolio'],
          ['text' => 'Case Studies', 'active' => false, 'url' => '/case-studies'],
        ],
      ],
      'cardGrid' => [
        'title' => 'Our Services',
        'description' => 'Discover what we can do for you',
        'cards' => [
          [
            'id' => '1',
            'heading' => 'Web Development',
            'subtitle' => 'Custom websites and applications',
            'description' => 'Modern, responsive web solutions',
            'image' => 'https://picsum.photos/400/300?random=4',
            'badge' => 'NEW',
            'buttons' => [
              ['text' => 'Learn More', 'active' => true, 'url' => '/services/web'],
              ['text' => 'Get Quote', 'active' => false, 'url' => '/quote'],
            ],
          ],
          [
            'id' => '2',
            'heading' => 'UI/UX Design',
            'subtitle' => 'Beautiful user experiences',
            'description' => 'Intuitive and engaging designs',
            'image' => 'https://picsum.photos/400/300?random=5',
            'badge' => 'POPULAR',
            'buttons' => [
              ['text' => 'View Work', 'active' => true, 'url' => '/services/design'],
              ['text' => 'Portfolio', 'active' => false, 'url' => '/portfolio'],
            ],
          ],
        ],
      ],
      'footer' => [
        'logo' => 'AQ',
        'siteName' => 'AQ Website',
        'description' => 'Building the future of web development',
        'menuColumns' => [
          [
            'title' => 'Company',
            'links' => [
              ['title' => 'About Us', 'url' => '/about'],
              ['title' => 'Team', 'url' => '/team'],
              ['title' => 'Careers', 'url' => '/careers'],
            ],
          ],
          [
            'title' => 'Services',
            'links' => [
              ['title' => 'Web Development', 'url' => '/services/web'],
              ['title' => 'Design', 'url' => '/services/design'],
              ['title' => 'Consulting', 'url' => '/services/consulting'],
            ],
          ],
        ],
        'socialIcons' => [
          ['name' => 'Facebook', 'url' => 'https://facebook.com', 'icon' => 'facebook'],
          ['name' => 'Twitter', 'url' => 'https://twitter.com', 'icon' => 'twitter'],
          ['name' => 'LinkedIn', 'url' => 'https://linkedin.com', 'icon' => 'linkedin'],
        ],
        'copyright' => '© 2024 AQ Website. All rights reserved.',
        'legalLinks' => [
          ['title' => 'Privacy Policy', 'url' => '/privacy'],
          ['title' => 'Terms of Service', 'url' => '/terms'],
        ],
      ],
    ];
    return new JsonResponse($data);
  }
} 