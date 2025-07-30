<?php

namespace Drupal\aq_json\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Core\Controller\ControllerBase;

class AqJsonController extends ControllerBase {
  public function getJson() {
    $data = [
      [
        'label' => 'Label',
        'heading' => 'Heading',
        'subtitle' => 'Every Key Visual',
        'image' => 'https://unsplash.it/800/400?image=100',
        'buttons' => [
          ['text' => 'Main', 'active' => true],
          ['text' => 'Button', 'active' => false],
        ],
      ],
      [
        'label' => 'Label',
        'heading' => 'Heading',
        'subtitle' => 'Every Key Visual',
        'image' => 'https://unsplash.it/800/400?image=101',
        'buttons' => [
          ['text' => 'Main', 'active' => false],
          ['text' => 'Button', 'active' => true],
        ],
      ],
      // Altri blocchi/card di esempio...
    ];
    return new JsonResponse($data);
  }
} 