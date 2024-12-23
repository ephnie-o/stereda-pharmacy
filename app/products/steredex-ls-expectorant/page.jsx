import SteredexLs from "@components/SteredexLs";


export const metadata = {
    title: 'Steredex LS Expectorant - Loosens Mucus and Clears Airways',
    description: 'Discover Steredex LS Expectorant, a powerful combination of ingredients that thins mucus, clears congestion, and improves breathing. Perfect for relieving chesty coughs.',
    openGraph: {
        title: 'Steredex LS Expectorant - Loosens Mucus and Clears Airways',
        description: 'Steredex LS Expectorant effectively treats chesty coughs by loosening mucus, reducing congestion, and clearing airways for improved respiratory comfort.',
        url: 'https://www.steredapharmacy.com/products/steredex-ls-expectorant',
        images: [
            {
            url: 'https://www.steredapharmacy.com/assets/images/steredexls200ml.jpeg',
            width: 800,
            height: 600,
            alt: 'Steredex LS Expectorant Syrup'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Steredex LS Expectorant - Loosens Mucus and Clears Airways',
        description: 'A reliable remedy for chesty coughs. Steredex LS Expectorant loosens mucus, clears congestion, and improves breathing for respiratory relief.',
        images: ['https://www.steredapharmacy.com/assets/images/steredexls200ml.jpeg']
    }
  };

export default function AboutPage() {
    return <SteredexLs />;
}