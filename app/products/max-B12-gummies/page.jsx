import MaxB12Gummies from "@components/Max-B12";

export const metadata = {
  title: 'Max B12 Gummies - Haemoglobin Enhancer & Vitamin B12 Energy Support',
  description:
    'Max B12 Gummies are a delicious way to boost Vitamin B12 levels, support haemoglobin production, and reduce fatigue. Formulated with folic acid for healthy red blood cells and lasting vitality.',
  openGraph: {
    title: 'Max B12 Gummies - Boost Energy & Support Healthy Blood Formation',
    description:
      'Max B12 Gummies deliver essential Vitamin B12 and folic acid to support haemoglobin, red blood cell production, and natural energy. Great-tasting, gelatin-free, and easy to take daily.',
    url: 'https://www.steredapharmacy.com/products/max-b12-gummies',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/MaxB12Gummies.jpeg',
        width: 800,
        height: 600,
        alt: 'Max B12 Vitamin Gummies Bottle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max B12 Gummies - Delicious Vitamin B12 & Energy Support',
    description:
      'Tasty Vitamin B12 gummies that boost haemoglobin levels, support red blood cell formation, and fight fatigue. Vegan-friendly and gelatin-free.',
    images: ['https://www.steredapharmacy.com/assets/images/MaxB12Gummies.jpeg'],
  },
};

export default function MaxB12GummiesPage() {
  return <MaxB12Gummies />;
}
