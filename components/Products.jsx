'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import sterevite from '@public/assets/images/sterevite.jpg'
import steremed from '@public/assets/images/steremed.jpg'
import sterecol from '@public/assets/images/sterecol.jpeg'
import whitebandage2 from '@public/assets/images/whitebandage2".jpeg'
import whitebandage4 from '@public/assets/images/whitebandage4".jpeg'
import whitebandage6 from '@public/assets/images/whitebandage6".jpeg'
import brownbandage2 from '@public/assets/images/brownbandage2".jpeg'
import brownbandage4 from '@public/assets/images/brownbandage4".jpeg'
import brownbandage6 from '@public/assets/images/brownbandage6".jpeg'


export default function Products() {
  // Array of products
  const products = [
    {
      image: sterevite,
      title: 'STEREVITE SYRUP',
      description: 'Sterevite Syrup is a multivitamin supplement designed to enhance overall health by providing essential vitamins and minerals. It supports recovery from illness, boosts energy levels, and is easy to consume, especially for those with difficulty swallowing pills. Sterevite is ideal for individuals with nutritional deficiencies, those recovering from illness, and anyone seeking to maintain optimal health. It is produced with high-quality standards, making it a trusted choice for maintaining vitality.',
      href: '/products/sterevite',
      animation: 'animate-from-left',
    },
    {
      image: steremed,
      title: 'STEREMED SYRUP',
      description: 'Steremed Syrup is a supplement containing L-carnosine and DHA, formulated to support brain health and provide antioxidant protection. L-carnosine helps protect cells from oxidative stress, while DHA is essential for cognitive function. Steremed is easy to take in syrup form, making it ideal for those seeking to enhance brain health and overall well-being.',
      href: '/products/steremed',
      animation: 'animate-from-right',
    },
    {
      image: sterecol,
      title: 'STERECOL GUMMIES',
      description: 'Sterecol Night Gummies are a delicious sleep aid formulated with melatonin to support a healthy sleep cycle, along with ashwagandha and lemon balm to promote relaxation and reduce stress. These gummies help you unwind naturally, making it easier to fall asleep and wake up refreshed, without forming habits or causing drowsiness the next day.',
      href: '/products/sterecol',
      animation: 'animate-from-left',
    },
    {
      image: whitebandage2,
      title: 'WHITE HIGH ELASTIC BANDAGE 2-INCHES',
      description: 'A versatile 2-inch white elastic bandage designed for secure compression and support, ideal for wrapping injuries, sprains, and strains. Durable, breathable, and easy to apply, it provides comfortable and effective stabilization for joints and muscles.',
      href: '/products/bandages',
      animation: 'animate-from-right',
    },
    { image: whitebandage4,
      title: 'WHITE HIGH ELASTIC BANDAGE 4-INCHES',
      description: 'A 4-inch white elastic bandage offering reliable compression and support for larger areas like knees, elbows, and ankles. Ideal for managing injuries, sprains, or swelling, it provides a secure, comfortable fit while allowing flexibility and breathability.',
      href:'/products/bandages',
      animation: 'animate-from-left',
    },
    {
      image: whitebandage6,
      title: 'WHITE HIGH ELASTIC BANDAGE 6-INCHES',
      description: 'A 6-inch white elastic bandage designed for effective compression and support of larger areas, such as the thigh, chest, or shoulder. Ideal for managing significant injuries, sprains, or post-surgical care, it ensures a secure, comfortable fit with excellent flexibility and breathability.',
      href:'/products/bandages',
      animation: 'animate-from-right',
    },
    {
      image: brownbandage2,
      title: 'BROWN HIGH ELASTIC BANDAGE 2-INCHES',
      description: 'A 2-inch brown elastic bandage designed for secure compression and support of small areas like wrists and ankles. Perfect for treating minor injuries, sprains, or strains, it offers a comfortable fit with a discreet appearance, flexibility, and breathability.',
      href:'/products/bandages',
      animation: 'animate-from-left',
    },
    {
      image: brownbandage4,
      title: 'BROWN HIGH ELASTIC BANDAGE 4-INCHES',
      description: 'A 4-inch brown elastic bandage ideal for providing compression and support to medium-sized areas like knees, calves, or elbows. It effectively helps manage injuries, sprains, or swelling while offering a comfortable, flexible fit with a discreet, natural look.',
      href:'/products/bandages',
      animation: 'animate-from-right',
    },
    {
      image: brownbandage6,
      title: 'BROWN HIGH ELASTIC BANDAGE 6-INCHES',
      description: 'A 6-inch brown elastic bandage designed for robust compression and support of larger areas like thighs, chest, or shoulders. Ideal for managing more extensive injuries, sprains, or post-surgical recovery, it offers a secure, flexible fit with a natural appearance and breathable comfort.',
      href:'/products/bandages',
      animation: 'animate-from-left',
    },
  ];

  const productRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe all product cards
    productRefs.current.forEach((product) => {
      if (product) observer.observe(product);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-zinc-700 mb-8">Our Products</h1>
          {products.map((product, index) => (
            <div key={index} ref={(el) => (productRefs.current[index] = el)} className={`flex flex-col md:flex-row mt-12 opacity-0`} data-animation={product.animation}>
              <div className="relative h-96 w-full md:w-1/2 max-w-md mx-auto overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </div>
              <div className="md:ml-8 mt-4 md:mt-0 md:w-1/2">
                <h2 className="text-2xl font-bold text-zinc-600">{product.title}</h2>
                <p className="mt-2 text-zinc-600">{product.description}</p>
                <Link href={product.href} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-full">
                  Learn more...
                </Link>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}