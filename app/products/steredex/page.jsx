import Steredex from '@components/Steredex'

export const metadata = {
    title: 'Steredex - Relieves All Types of Coughs',
    description: 'Discover Steredex, a fast-acting solution for any type of coughs. Just get the right type for your cough',
    openGraph: {
      title: 'Steredex - Relieves All Types of Coughs',
      description: 'Steredex helps any type of cough.',
      url: 'https://www.steredapharmacy.com/products/steredex-cough-suppressant',
      images: [
        {
          url: 'https://www.steredapharmacy.com/assets/images/steredexsupp200ml.jpeg',
          width: 800,
          height: 600,
          alt: 'Steredex Cough Suppressant Syrup'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Steredex - Relieves All Types of Coughs',
      description: 'Steredex helps any type of cough.',
      images: ['https://www.steredapharmacy.com/assets/images/steredexsupp200ml.jpeg']
    }
  };

const page = () => {
  return (
    <Steredex />
  )
}

export default page