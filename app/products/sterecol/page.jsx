import Sterecol from '@components/Sterecol';

export const metadata = {
    title: 'Sterecol Night Gummies - Sleep Support with Melatonin, Ashwagandha & Lemon Balm',
    description: 'Discover Sterecol Night Gummies, a natural sleep aid containing melatonin, ashwagandha, and lemon balm to regulate sleep cycles, reduce stress, and promote relaxation for a restful night.',
    openGraph: {
      title: 'Sterecol Night Gummies - Sleep Support with Melatonin, Ashwagandha & Lemon Balm',
      description: 'A natural sleep aid containing melatonin, ashwagandha, and lemon balm to help regulate sleep cycles and promote relaxation.',
      url: 'https://www.steredapharmacy.com/products/sterecol',
      images: [
        {
          url: 'https://www.steredapharmacy.com/assets/images/sterecol.jpeg',
          width: 800,
          height: 600,
          alt: 'Sterecol Night Gummies'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sterecol Night Gummies - Sleep Support',
      description: 'A natural sleep aid with melatonin, ashwagandha, and lemon balm for relaxation and restful sleep.',
      images: ['https://www.steredapharmacy.com/assets/images/sterecol.jpeg']
    }
  };

export default function AboutPage() {
    return <Sterecol />;
}