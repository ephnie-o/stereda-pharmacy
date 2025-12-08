import Stepac from "@components/Stepac";

export const metadata = {
  title: 'Stepac Tablets - Aceclofenac & Paracetamol for Fast Pain Relief',
  description:
    'Stepac Tablets combine Aceclofenac and Paracetamol to deliver fast, effective relief from pain, inflammation and fever. Ideal for headaches, dental pain, musculoskeletal pain, and menstrual cramps.',
  openGraph: {
    title: 'Stepac — Aceclofenac & Paracetamol Pain Relief Tablets',
    description:
      'Stepac Tablets provide rapid relief from pain and inflammation using a combination of Aceclofenac and Paracetamol. Convenient and effective for everyday pain management.',
    url: 'https://www.steredapharmacy.com/products/stepac',
    images: [
      {
        url: 'https://www.steredapharmacy.com/assets/images/stepac.jpeg',
        width: 800,
        height: 600,
        alt: 'Stepac Aceclofenac & Paracetamol Tablets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stepac — Fast Acting Aceclofenac & Paracetamol',
    description:
      'Fast-acting pain relief with Stepac Tablets. Aceclofenac + Paracetamol for inflammation, pain and fever.',
    images: ['https://www.steredapharmacy.com/assets/images/stepac.jpeg'],
  },
};

export default function StepacPage() {
  return <Stepac />;
}
