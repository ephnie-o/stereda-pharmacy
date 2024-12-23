import ShopNowPage from '@components/shopnow/ShopNowPage';

export const metadata = {
  title: 'Shop Now - Stereda Pharmaceuticals Limited',
  description: 'Discover and purchase a wide range of healthcare products, supplements, and essentials from Stereda Pharmaceuticals Limited. Enjoy secure shopping and reliable delivery.',
  openGraph: {
    title: 'Shop Now - Stereda Pharmaceuticals Limited',
    description: 'Explore our collection of healthcare products, including supplements and essentials, available for purchase online. Secure your health with Stereda Pharmaceuticals Limited.',
    url: 'https://www.steredapharmacy.com/shopnow',
    type: 'website',
    images: [
      {
        url: 'https://www.steredapharmacy.com/images/shop-banner.jpg', // Replace with actual URL of your banner or featured image
        width: 1200,
        height: 630,
        alt: 'Shop Now at Stereda Pharmaceuticals Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Now - Stereda Pharmaceuticals Limited',
    description: 'Buy healthcare products, supplements, and more from Stereda Pharmaceuticals Limited. Enjoy a seamless online shopping experience.',
    images: ['https://www.steredapharmacy.com/images/shop-banner.jpg'], // Replace with actual URL of your banner or featured image
  },
};

export default function ShopNow() {
  return (
    <ShopNowPage />
  )
}