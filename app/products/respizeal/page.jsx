import Respizeal from "@components/Respizeal";

export const metadata = {
  title: 'Respizeal Herbal Syrup - Natural Relief for Cough, Cold & Throat Irritation',
  description:
    'Respizeal Herbal Syrup provides natural relief for sore throat, cough, and congestion. Formulated with ivy leaf and propolis extracts to support respiratory health and soothe irritation.',
  openGraph: {
    title: 'Respizeal Herbal Syrup - Soothes Cough and Supports Clear Breathing',
    description:
      'Respizeal Syrup combines ivy leaf and propolis extracts to naturally relieve cough, cold, and throat irritation. Gentle, effective, and suitable for adults and children.',
    url: 'https://www.steredapharmacy.com/products/respizeal-syrup',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/Respizeal2.jpeg',
        width: 800,
        height: 600,
        alt: 'Respizeal Herbal Syrup Bottle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Respizeal Herbal Syrup - Natural Cough and Throat Relief',
    description:
      'Herbal syrup with ivy leaf and propolis extracts to relieve cough, cold, and throat irritation naturally.',
    images: ['https://www.steredapharmacy.com/assets/images/Respizeal2.jpeg'],
  },
};

export default function RespizealPage() {
  return <Respizeal />;
}
