import MaxB from "@components/Max-B";

export const metadata = {
  title: 'Max-B Vitamin B-Complex Tablets - Energy, Nerve & Muscle Support',
  description:
    'Max-B Vitamin B-Complex Tablets provide complete B-vitamin support to boost energy, maintain healthy nerves and muscles, and reduce fatigue. Ideal for daily vitality and overall wellbeing.',
  openGraph: {
    title: 'Max-B Vitamin B-Complex Tablets - Complete Daily B-Vitamin Support',
    description:
      'Max-B Tablets deliver a balanced blend of B-vitamins to support energy metabolism, nerve health, and red blood cell formation. Stay strong and energized every day.',
    url: 'https://www.steredapharmacy.com/products/max-b',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/MaxB2.jpeg',
        width: 800,
        height: 600,
        alt: 'Max-B Vitamin B-Complex Tablets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max-B Vitamin B-Complex Tablets - Boost Energy & Nerve Health',
    description:
      'Complete B-vitamin formula to support energy, nerve function, and muscle health for daily vitality and strength.',
    images: ['https://www.steredapharmacy.com/assets/images/MaxB2.jpeg'],
  },
};

export default function MaxBPage() {
  return <MaxB />;
}
