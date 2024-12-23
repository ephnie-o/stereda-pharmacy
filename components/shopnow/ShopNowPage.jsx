import Link from 'next/link'

export default function ShopNowPage() {
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