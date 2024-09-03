import Link from 'next/link'

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
    <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <section className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">Our Online Store is Coming Soon!!!...</h1>
        <p className="text-zinc-600 mb-4">
          We’re working hard to bring you a seamless online shopping experience. Soon, you’ll be able to browse and purchase your products from Stereda Pharmacy right from the comfort of your home.
        </p>
        <p className="text-zinc-600 mb-4">
          Subscribe to our newsletter below to be the first to know when our online store launches.
        </p>
        <p className="text-zinc-600 mb-6">
          Can’t wait? Visit our{' '}
          <Link href="/contactus" className="text-red-500 font-semibold">Contact Us Page</Link>{' '}
          and we’ll be happy to assist you with anything.
        </p>
      </section>
    </div>
  )
}