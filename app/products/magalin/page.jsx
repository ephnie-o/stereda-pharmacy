import Magalin from "@components/Magalin";

export const metadata = {
  title: 'Magalin Capsules - Pregabalin & Methylcobalamin for Nerve Pain Relief',
  description:
    'Magalin Capsules combine Pregabalin and Methylcobalamin to relieve nerve pain and repair damaged nerves. Ideal for diabetic neuropathy, sciatica, and chronic nerve-related pain.',
  openGraph: {
    title: 'Magalin Capsules - Effective Relief for Neuropathic Pain',
    description:
      'Magalin Capsules contain Pregabalin and Methylcobalamin to support nerve repair and reduce neuropathic pain, tingling, and numbness. Promotes healthy nerve function and comfort.',
    url: 'https://www.steredapharmacy.com/products/magalin',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/magalin.jpeg',
        width: 800,
        height: 600,
        alt: 'Magalin Pregabalin & Methylcobalamin Capsules',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magalin Capsules - Pregabalin & Methylcobalamin Nerve Support',
    description:
      'Advanced nerve pain relief with Pregabalin and Methylcobalamin. Helps repair nerves, reduce tingling, and improve comfort.',
    images: ['https://www.steredapharmacy.com/assets/images/magalin.jpeg'],
  },
};

export default function MagalinPage() {
  return <Magalin />;
}
