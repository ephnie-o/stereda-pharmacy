import Bandages from '@components/Bandages';

export const metadata = {
    title: 'Elastic Bandages - White and Brown, Available in Multiple Sizes',
    description: 'Explore our range of high-quality elastic bandages in white and brown, available in 2, 4, and 6 inches. Perfect for secure compression, support, and injury management.',
    openGraph: {
      title: 'Elastic Bandages - White and Brown, Available in Multiple Sizes',
      description: 'High-quality elastic bandages in white and brown, available in 2, 4, and 6 inches for secure compression and injury management.',
      url: 'https://www.steredapharmacy.com/products/bandages',
      images: [
        {
          url: 'https://www.steredapharmacy.com/assets/images/whitebandage6".jpeg',
          width: 800,
          height: 600,
          alt: 'Elastic Bandages'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Elastic Bandages - White and Brown, Available in Multiple Sizes',
      description: 'High-quality elastic bandages for secure compression and injury management in 2, 4, and 6 inches.',
      images: ['https://www.steredapharmacy.com/assets/images/whitebandage6".jpeg']
    }
  };

export default function AboutPage() {
    return <Bandages />;
}










