import SteredexCoughSuppressant from "@components/SteredexCoughSuppressant";


export const metadata = {
    title: 'Steredex Cough Suppressant - Relieves Dry and Persistent Coughs',
    description: 'Discover Steredex Cough Suppressant, a fast-acting solution for dry and persistent coughs. It soothes throat irritation and suppresses the cough reflex, allowing for restful recovery.',
    openGraph: {
      title: 'Steredex Cough Suppressant - Relieves Dry and Persistent Coughs',
      description: 'Steredex Cough Suppressant helps relieve dry, unproductive coughs by calming the throat and suppressing the cough reflex, offering comfort and restful recovery.',
      url: 'https://www.steredapharmacy.com/products/steredex-cough-suppressant',
      images: [
        {
          url: 'https://www.steredapharmacy.com/assets/images/steredexsupp200ml.jpeg',
          width: 800,
          height: 600,
          alt: 'teredex Cough Suppressant Syrup'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Steredex Cough Suppressant - Relieves Dry and Persistent Coughs',
      description: 'A fast-acting solution for dry, persistent coughs. Steredex Cough Suppressant soothes throat irritation and suppresses the cough reflex for restful recovery.',
      images: ['https://www.steredapharmacy.com/assets/images/steredexsupp200ml.jpeg']
    }
  };

export default function AboutPage() {
    return <SteredexCoughSuppressant />;
}