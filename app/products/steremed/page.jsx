import Steremed from '@components/Steremed';

export const metadata = {
    title: 'Steremed Syrup - Brain Health and Antioxidant Protection',
    description: 'Steremed Syrup is a supplement with L-carnosine and DHA, formulated to support brain health and provide antioxidant protection, ideal for cognitive enhancement and well-being.',
    openGraph: {
      title: 'Steremed Syrup - Brain Health and Antioxidant Protection',
      description: 'A supplement with L-carnosine and DHA to support brain health and provide antioxidant protection.',
      url: 'https://www.steredapharmacy.com/products/steremed',
      images: [
        {
          url: 'https://www.steredapharmacy.com/assets/images/steremed.jpg',
          width: 800,
          height: 600,
          alt: 'Steremed Syrup'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Steremed Syrup - Brain Health and Antioxidant Protection',
      description: 'Supports brain health and cognitive function with L-carnosine and DHA.',
      images: ['https://www.steredapharmacy.com/assets/images/steremed.jpg']
    }
  };

export default function AboutPage() {
    return <Steremed />;
}