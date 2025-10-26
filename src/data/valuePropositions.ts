interface ValueProposition {
  id: string;
  title: string;
  items: string[];
}

export const valuePropositions: ValueProposition[] = [
  {
    id: 'services',
    title: 'Our Services',
    items: [
      'Modular Kitchens',
      'Modular Wardrobes',
      'Storage & Organization Solutions',
      'Living Room Designs',
      'Bedroom Interiors',
      'Bathroom Renovations',
      'False Ceiling & Lighting',
      'Flooring Solutions',
      'Wall Treatments & Paint',
      'Furniture & Decor',
      'Complete Home Interiors',
      'Commercial Spaces'
    ]
  },
  {
    id: 'pricing',
    title: 'Price Benefits',
    items: [
      'Flexible Payment Options',
      'No Hidden Costs',
      'Transparent Pricing',
      'Competitive Rates',
      'Easy EMI Available',
      'Value for Money',
      'Free Design Consultation',
      'Detailed Quotations'
    ]
  },
  {
    id: 'warranty',
    title: 'Warranty & Service',
    items: [
      'Flat 10-Year Warranty²',
      'Up to 1-Year On-Site Service Warranty',
      'Quality Assurance',
      'Post-Installation Support',
      'Free Maintenance Tips',
      'Dedicated Customer Support',
      'Quick Resolution Times'
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Science',
    items: [
      'AquaBloc® Technology - Superior water resistance',
      'AntiBubble® Technology - Prevents surface bubbling',
      'DuraBuild™ Technology - Enhanced structural durability',
      'Design Science - Data-driven design approaches',
      'Premium Materials',
      'Eco-Friendly Options',
      'Advanced Manufacturing',
      'Quality Testing Protocols'
    ]
  }
];
