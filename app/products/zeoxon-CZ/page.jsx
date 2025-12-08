import ZeoxonCZ from "@components/Zeoxon-CZ";

export const metadata = {
  title: 'Zeoxon CZ Effervescent Tablets - Immunity Boost with Vitamin C, D3 & Zinc',
  description:
    'Zeoxon CZ Effervescent Tablets are a refreshing, sugar-free immunity booster packed with Vitamin C, D3, and Zinc. Supports immune defense, energy, and daily wellness in a fizzy drink form.',
  openGraph: {
    title: 'Zeoxon CZ Effervescent Tablets - Daily Immunity and Energy Support',
    description:
      'Boost your immunity with Zeoxon CZ Effervescent Tablets. Enriched with Vitamin C, Vitamin D3, and Zinc for enhanced immune function, energy, and daily vitality.',
    url: 'https://www.steredapharmacy.com/products/zeoxon-cz',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/Zeoxon2.jpeg',
        width: 800,
        height: 600,
        alt: 'Zeoxon CZ Effervescent Tablets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeoxon CZ Effervescent Tablets - Boost Immunity with Vitamin C, D3 & Zinc',
    description:
      'A fizzy, sugar-free daily immunity supplement with Vitamin C, D3, and Zinc for energy and immune system support.',
    images: ['https://www.steredapharmacy.com/assets/images/Zeoxon2.jpeg'],
  },
};

export default function ZeoxonCZPage() {
  return <ZeoxonCZ />;
}
