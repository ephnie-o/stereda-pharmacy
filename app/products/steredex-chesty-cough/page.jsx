import SteredexChesty from "@components/SteredexChesty";


export const metadata = {
    title: 'Steredex Chesty Cough Syrup - Relieves Chesty Coughs and Loosens Mucus',
    description: 'Discover Steredex Chesty Cough Syrup, an effective remedy for chesty coughs. It helps loosen mucus, relieve congestion, and soothe throat irritation for improved respiratory comfort.',
    openGraph: {
      title: 'Steredex Chesty Cough Syrup - Relieves Chesty Coughs and Clears Airways',
      description: 'Steredex Chesty Cough Syrup provides relief from chesty coughs by loosening mucus, clearing congestion, and soothing throat discomfort. Ideal for cold and respiratory relief.',
      url: 'https://www.steredapharmacy.com/products/steredex-chesty-cough',
      images: [
        {
          url: 'https://www.steredapharmacy.com/assets/images/steredex200ml.jpeg',
          width: 800,
          height: 600,
          alt: 'Steredex Chesty Cough Syrup'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Steredex Chesty Cough Syrup - Relieves Chesty Coughs and Clears Airways',
      description: 'An effective cough syrup to relieve chesty coughs, loosen mucus, and clear congestion for respiratory comfort.',
      images: ['https://www.steredapharmacy.com/assets/images/steredex200ml.jpeg']
    }
  };

export default function AboutPage() {
    return <SteredexChesty />;
}