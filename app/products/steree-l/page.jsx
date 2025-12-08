import StereeL from "@components/Stereel";

export const metadata = {
  title: 'Steree-L Syrup - Relief from Allergies & Breathing Discomfort',
  description:
    'Steree-L Syrup combines Levocetirizine Dihydrochloride and Montelukast Sodium to provide effective relief from allergy symptoms such as sneezing, runny nose, congestion, and breathing difficulties.',
  openGraph: {
    title: 'Steree-L Syrup - Levocetirizine & Montelukast for Allergy Relief',
    description:
      'Steree-L Syrup provides dual-action relief from allergic rhinitis, seasonal allergies, and mild asthma. Reduces sneezing, nasal irritation, and improves breathing comfort.',
    url: 'https://www.steredapharmacy.com/products/steree-l',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/steree-l.jpeg',
        width: 800,
        height: 600,
        alt: 'Steree-L Syrup Bottle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steree-L Syrup - Allergy & Breathing Support',
    description:
      'A balanced combination of Levocetirizine and Montelukast to relieve allergy symptoms and improve respiratory comfort.',
    images: ['https://www.steredapharmacy.com/assets/images/steree-l.jpeg'],
  },
};

export default function StereeLPage() {
  return <StereeL />;
}
