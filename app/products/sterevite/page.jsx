import Sterevite from '@components/Sterevite';

export const metadata = {
  title: 'Sterevite Syrup - Multivitamin Supplement for Children',
  description: 'Sterevite Syrup is a multivitamin supplement for children containing essential vitamins such as A, D, and B-complex to support growth, immunity, and overall health.',
  openGraph: {
    title: 'Sterevite Syrup - Multivitamin Supplement for Children',
    description: 'A multivitamin syrup for children that supports growth, immunity, and overall health with essential vitamins.',
    url: 'https://www.steredapharmacy.com/products/sterevite',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/sterevite.jpg',
        width: 800,
        height: 600,
        alt: 'Sterevite Syrup'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sterevite Syrup - Multivitamin Supplement for Children',
    description: 'Supports growth, immunity, and overall health with essential vitamins.',
    images: ['https://www.steredapharmacy.com/assets/images/sterevite.jpg']
  }
};

export default function AboutPage() {
    return <Sterevite />;
}