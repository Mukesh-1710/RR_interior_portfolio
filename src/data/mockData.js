import { Settings, ShieldCheck, Clock, PenTool } from 'lucide-react';
import Kitchen from '../assets/kitchen.jpg';
import TVUnit from '../assets/tv-unit.jpg';
import Furniture from '../assets/furniture.jpg';
import Wardrobe from '../assets/wardrobe.jpg';
import Tvunit2 from '../assets/tv-unit-data.png';
import Kitchen2 from '../assets/modular-kitchen.png';
import Wardrobe2 from '../assets/wardrobe-data.jpg';




export const servicesData = [
  {
    id: 1,
    title: 'Wardrobe',
    description: 'Custom, space-saving wardrobes with premium finishes to match your room style.',
    image: Wardrobe
  },
  {
    id: 2,
    title: 'Modular Kitchen',
    description: 'Modern, highly functional kitchens built with durable, water-resistant materials.',
    image: Kitchen
  },
  {
    id: 3,
    title: 'TV Unit',
    description: 'Sleek and elegant TV units that serve as the focal point of your living room.',
    image: TVUnit
  },
  {
    id: 4,
    title: 'Custom Furniture',
    description: 'Bespoke carpentry and handmade custom furniture for a unique living space.',
    image: Furniture
  }
];

export const featuresData = [
  {
    id: 1,
    title: 'Affordable Pricing',
    description: 'We believe luxury should be accessible. Get premium designs within your budget.',
    icon: Settings // Using Settings for now, since it's a dummy
  },
  {
    id: 2,
    title: 'Quality Materials',
    description: 'We use only the highest grade, durable materials backed by our warranty.',
    icon: ShieldCheck
  },
  {
    id: 3,
    title: 'On-Time Delivery',
    description: 'Time is precious. We guarantee project completion within the promised timeline.',
    icon: Clock
  },
  {
    id: 4,
    title: 'Custom Designs',
    description: 'Every space is unique. We tailor our designs to perfectly fit your lifestyle.',
    icon: PenTool
  }
];

export const projectsData = [
  {
    id: 1,
    title: 'Modern Minimalist Kitchen',
    category: 'Kitchen',
    image: Kitchen2
  },
  {
    id: 2,
    title: 'Contemporary TV Unit',
    category: 'TV Unit',
    image: Tvunit2
  },
  {
    id: 3,
    title: 'Luxury Sliding Wardrobe',
    category: 'Wardrobe',
    image: Wardrobe2
  },
  {
    id: 4,
    title: 'L-Shaped Modular Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Floating TV Console',
    category: 'TV Unit',
    image: 'https://images.unsplash.com/photo-1600607688069-b5ef870425a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Walk-in Wardrobe Space',
    category: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];
