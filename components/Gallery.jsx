'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image'
import img1 from '@public/assets/images/img1.jpg'
import img2 from '@public/assets/images/img2.jpg'
import img3 from '@public/assets/images/img3.jpg'
import img4 from '@public/assets/images/img4.jpg'
import img5 from '@public/assets/images/img5.jpg'
import img6 from '@public/assets/images/img6.jpg'
import img7 from '@public/assets/images/img7.jpg'
import img8 from '@public/assets/images/img8.jpg'
import img9 from '@public/assets/images/img9.jpg'
import img10 from '@public/assets/images/img10.jpg'
import img11 from '@public/assets/images/img11.jpg'
import img12 from '@public/assets/images/img12.jpg'
import img13 from '@public/assets/images/img13.jpg'
import img14 from '@public/assets/images/img14.jpg'
import img15 from '@public/assets/images/img15.jpg'
import img16 from '@public/assets/images/img16.jpeg'
import img18 from '@public/assets/images/img18.jpeg'
import img19 from '@public/assets/images/img19.jpeg'
import img20 from '@public/assets/images/img20.jpeg'
import img21 from '@public/assets/images/img21.jpeg'
import img22 from '@public/assets/images/img22.jpeg'
import img23 from '@public/assets/images/img23.jpeg'
import img24 from '@public/assets/images/img24.jpeg'
import img25 from '@public/assets/images/img25.jpeg'
import img26 from '@public/assets/images/img26.jpeg'
import sterecol from '@public/assets/images/sterecol.jpeg'
import sterevite from '@public/assets/images/sterevite.jpg'
import steremed from '@public/assets/images/steremed.jpg'
import whitebandage2 from '@public/assets/images/whitebandage2".jpeg'
import whitebandage4 from '@public/assets/images/whitebandage4".jpeg'
import whitebandage6 from '@public/assets/images/whitebandage6".jpeg'
import brownbandage2 from '@public/assets/images/brownbandage2".jpeg'
import brownbandage4 from '@public/assets/images/brownbandage4".jpeg'
import brownbandage6 from '@public/assets/images/brownbandage6".jpeg'
import ceo1 from '@public/assets/images/ceo1.jpeg'
import ceo2 from '@public/assets/images/ceo2.jpeg'
import ceo3 from '@public/assets/images/ceo3.jpeg'
import ceo4 from '@public/assets/images/ceo4.jpg'
import ceo5 from '@public/assets/images/ceo5.jpg'
import ceo6 from '@public/assets/images/ceo6.jpg'

export default function Gallery() {
  const images = [
    { src: ceo3, animation: 'animate-from-left' },
    { src: ceo2, animation: 'animate-from-bottom' },
    { src: ceo1, animation: 'animate-from-right' },
    { src: ceo4, animation: 'animate-from-left' },
    { src: ceo5, animation: 'animate-from-bottom' },
    { src: ceo6, animation: 'animate-from-right' },
    { src: sterecol, animation: 'animate-from-left' },
    { src: steremed, animation: 'animate-from-bottom' },
    { src: sterevite, animation: 'animate-from-right' },
    { src: whitebandage2, animation: 'animate-from-left' },
    { src: whitebandage4, animation: 'animate-from-bottom' },
    { src: whitebandage6, animation: 'animate-from-right' },
    { src: brownbandage2, animation: 'animate-from-left' },
    { src: brownbandage4, animation: 'animate-from-bottom' },
    { src: brownbandage6, animation: 'animate-from-right' },
    { src: img18, animation: 'animate-from-left' },
    { src: img19, animation: 'animate-from-bottom' },
    { src: img20, animation: 'animate-from-right' },
    { src: img21, animation: 'animate-from-left' },
    { src: img22, animation: 'animate-from-bottom' },
    { src: img23, animation: 'animate-from-right' },
    { src: img24, animation: 'animate-from-left' },
    { src: img25, animation: 'animate-from-bottom' },
    { src: img26, animation: 'animate-from-right' },
    { src: img1, animation: 'animate-from-left' },
    { src: img2, animation: 'animate-from-bottom' },
    { src: img3, animation: 'animate-from-right' },
    { src: img4, animation: 'animate-from-left' },
    { src: img5, animation: 'animate-from-bottom' },
    { src: img6, animation: 'animate-from-right' },
    { src: img7, animation: 'animate-from-left' },
    { src: img8, animation: 'animate-from-bottom' },
    { src: img9, animation: 'animate-from-right' },
    { src: img10, animation: 'animate-from-left' },
    { src: img11, animation: 'animate-from-bottom' },
    { src: img12, animation: 'animate-from-right' },
    { src: img13, animation: 'animate-from-left' },
    { src: img14, animation: 'animate-from-bottom' },
    { src: img15, animation: 'animate-from-right' },
    { src: img16, animation: 'animate-from-left' },
  ];

  const imageRefs = useRef([]);

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

    // Observe all images
    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-zinc-700 mb-8">Stereda Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} ref={(el) => (imageRefs.current[index] = el)} className="relative h-64 overflow-hidden rounded-lg shadow-lg opacity-0" data-animation={image.animation}>
              <Image
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}