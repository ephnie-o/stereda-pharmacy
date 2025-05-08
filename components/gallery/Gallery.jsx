'use client'
import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';

// Define categories and gallery items
const categories = [
  'All',
  'Products',
  'CEO',
  'Building',
  'Awards',
  'Employees',
  'Others',
];

const galleryItems = [
    { src: '/assets/images/img1.jpg', alt: 'Adade branch', category: 'Building'  },
    { src: '/assets/images/img2.jpg', alt: 'Weija branch', category: 'Building', span: 'lg:row-span-2, md:row-span-2, sm:row-span-2' },
    { src: '/assets/images/img3.jpg', alt: 'Dispensing', category: 'CEO', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/img4.jpg', alt: 'Dispensing', category: 'CEO', span: 'sm:col-span-2' },
    { src: '/assets/images/img5.jpg', alt: 'Drugs', category: 'Others' },
    { src: '/assets/images/img6.jpg', alt: 'Dispensing', category: 'Employees' },
    { src: '/assets/images/img7.jpg', alt: 'Adade branch', category: 'Building'},
    { src: '/assets/images/img8.jpg', alt: 'Employees', category: 'Employees', span: 'sm:row-span-2' },
    { src: '/assets/images/img10.jpg', alt: 'Fijai branch', category: 'Building', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/ceo0.jpeg', alt: 'CEO', category: 'CEO'  },
    { src: '/assets/images/ceo9.jpeg', alt: 'CEO', category: 'CEO', span: 'lg:row-span-2, md:row-span-2, sm:row-span-2' },
    { src: '/assets/images/ceo8.jpeg', alt: 'CEO', category: 'CEO', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/ceo7.jpeg', alt: 'CEO', category: 'CEO', span: 'sm:col-span-2' },
    { src: '/assets/images/ceo01.jpeg', alt: 'CEO', category: 'CEO' },
    { src: '/assets/images/ceo02.jpeg', alt: 'CEO', category: 'CEO' },
    { src: '/assets/images/ceo03.jpeg', alt: 'CEO', category: 'CEO'},
    { src: '/assets/images/img8.jpg', alt: 'Employees', category: 'Employees', span: 'sm:row-span-2' },
    { src: '/assets/images/img10.jpg', alt: 'Fijai branch', category: 'Building', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/img11.jpg', alt: 'Signboard', category: 'Others', span: 'sm:col-span-2' },
    { src: '/assets/images/img12.jpg', alt: 'Dispensing', category: 'Employees', span: 'lg:row-span-2, md:row-span-2' },
    { src: '/assets/images/img13.jpg', alt: 'Drugs', category: 'Others', span: 'lg:col-span-2, md:col-span-2'  },
    { src: '/assets/images/img14.jpg', alt: 'Drugs', category: 'Others' },
    { src: '/assets/images/img15.jpg', alt: 'Dispensing', category: 'Employees', span: 'sm:row-span-2' },
    { src: '/assets/images/img16.jpeg', alt: 'Afrikiko branch', category: 'Building' },
    { src: '/assets/images/img17.jpg', alt: 'Sterevite syrup', category: 'Products', span: 'sm:col-span-2' },
    { src: '/assets/images/img18.jpeg', alt: 'Sterevite and Steremed', category: 'Products' },
    { src: '/assets/images/img19.jpeg', alt: 'Sterevite and Steremed', category: 'Products', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/img20.jpeg', alt: 'Delivery Truck', category: 'Others' },
    { src: '/assets/images/img21.jpeg', alt: 'Delivery Truck', category: 'Others', span: 'lg:row-span-2, md:row-span-2, sm:row-span-2' },
    { src: '/assets/images/img22.jpeg', alt: 'Sterevite and Steremed', category: 'Products', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/img23.jpeg', alt: 'Sterecol gummies', category: 'Products', span: 'sm:col-span-2' },
    { src: '/assets/images/img24.jpeg', alt: 'Sterecol gummies', category: 'Products' },
    { src: '/assets/images/img25.jpeg', alt: 'Sterecol gummies', category: 'Products' },
    { src: '/assets/images/img26.jpeg', alt: 'Sterecol gummies', category: 'Products' },
    { src: '/assets/images/7Q9A6241_Original.jpg', alt: 'Drugs', category: 'Others', span: 'sm:row-span-2' },
    { src: '/assets/images/7Q9A6246_Original.jpg', alt: 'Afrikiko branch', category: 'Building', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/about.jpeg', alt: 'Weija branch', category: 'Building', span: 'sm:col-span-2' },
    { src: '/assets/images/whitebandage2.jpeg', alt: 'Bandage', category: 'Products', span: 'lg:row-span-2, md:row-span-2' },
    { src: '/assets/images/whitebandage4.jpeg', alt: 'Bandage', category: 'Products', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/whitebandage6.jpeg', alt: 'Bandage', category: 'Products' },
    { src: '/assets/images/brownbandage2.jpeg', alt: 'Bandage', category: 'Products', span: 'sm:row-span-2' },
    { src: '/assets/images/brownbandage4.jpeg', alt: 'Bandage', category: 'Products' },
    { src: '/assets/images/brownbandage6.jpeg', alt: 'Bandage', category: 'Products', span: 'sm:col-span-2' },
    { src: '/assets/images/ceo1.jpeg', alt: 'Dispensing', category: 'CEO' },
    { src: '/assets/images/ceo2.jpeg', alt: 'CEO', category: 'CEO', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/ceo3.jpeg', alt: 'CEO', category: 'CEO' },
    { src: '/assets/images/ceo4.jpg', alt: 'Award', category: 'Awards', span: 'lg:row-span-2, md:row-span-2, sm:row-span-2' },
    { src: '/assets/images/ceo5.jpg', alt: 'CEO', category: 'CEO', span: 'lg:col-span-2, md:col-span-2' },
    { src: '/assets/images/ceo5.jpg', alt: 'CEO', category: 'Awards', span: 'sm:col-span-2' },
    { src: '/assets/images/ceo6.jpg', alt: 'Award', category: 'Awards' },
    { src: '/assets/images/logo.jpg', alt: 'logo', category: 'Others' },
    { src: '/assets/images/sterecol.jpeg', alt: 'Sterecol gummies', category: 'Products' },
    { src: '/assets/images/steredexls.jpeg', alt: 'Steredex LS Cough Expectorant', category: 'Products', span: 'sm:row-span-2' },
    { src: '/assets/images/steredexsupp.jpeg', alt: 'Steredex Cough Suppressant', category: 'Products', span: 'lg:col-span-2, md:col-span-2'  },
    { src: '/assets/images/steredexchesty.jpeg', alt: 'Steredex Chesty Cough Syrup', category: 'Products', span: 'sm:col-span-2' },
    { src: '/assets/images/sterevite.jpg', alt: 'Sterevite Syrup', category: 'Products', span: 'lg:row-span-2, md:row-span-2' },
    { src: '/assets/images/steremed.jpg', alt: 'Steremed Syrup', category: 'Products', span: 'lg:col-span-2, md:col-span-2' },
    { src: "/assets/images/MaxB2.jpeg", alt: "Max-B Tablets", category: 'Products',},
    { src: "/assets/images/MaxB.jpeg", alt: "Max-B Tablets", category: 'Products', span: 'sm:row-span-2'},
    { src: "/assets/images/MaxB3.jpeg", alt: "Max-B Tablets", category: 'Products',},
    { src: "/assets/images/MaxB12Gummies.jpeg", alt: "Max B12 Gummies", category: 'Products', span: 'sm:col-span-2'},
    { src: "/assets/images/MaxB12.jpeg", alt: "Max B12 Gummies", category: 'Products',},
    { src: "/assets/images/MazB12Gummies2.jpeg", alt: "Max B12 Gummies", category: 'Products', span: 'lg:col-span-2, md:col-span-2' },
    { src: "/assets/images/MaxB12Gummies3.jpeg", alt: "Max B12 Gummies", category: 'Products',},
    { src: "/assets/images/Respizeal2.jpeg", alt: "Respizeal Syrup", category: 'Products', span: 'lg:row-span-2, md:row-span-2, sm:row-span-2' },
    { src: "/assets/images/Respizeal.jpeg", alt: "Respizeal Syrup", category: 'Products', span: 'lg:col-span-2, md:col-span-2' },
    { src: "/assets/images/Respizeal3.jpeg", alt: "Respizeal Syrup", category: 'Products', span: 'sm:col-span-2'},
    { src: "/assets/images/Respizeal4.jpeg", alt: "Respizeal Syrup", category: 'Products',},
    { src: "/assets/images/Zeoxon3.jpeg", alt: "Zeoxon-CZ Effervescent", category: 'Products',},
    { src: "/assets/images/Zeoxon.jpeg", alt: "Zeoxon-CZ Effervescent", category: 'Products',},
    { src: "/assets/images/Zeoxon2.jpeg", alt: "Zeoxon-CZ Effervescent", category: 'Products', span: 'sm:row-span-2'},
    { src: "/assets/images/Zeoxon4.jpeg", alt: "Zeoxon-CZ Effervescent", category: 'Products', span: 'lg:col-span-2, md:col-span-2' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const videoRef = useRef(null);
  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-64 lg:h-96">
        <video
            ref={videoRef}
            autoPlay
            muted
            controls
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        >
            <source src="/assets/images/SteredaVideo.mp4" type="video/mp4" />
            <Image
            src="/assets/images/img14.jpg"
            alt="Gallery Full Width"
            fill
            className="object-cover"
            />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">Gallery Full Width</h1>
          <nav className="mt-2 text-sm lg:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Gallery</span>
          </nav>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 mt-8">
        <ul className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full transition-colors text-sm md:text-base
                  ${
                    activeCategory === cat
                      ? 'bg-[#80b949] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery Grid */}
      <section className="w-full mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[minmax(200px,auto)]">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`overflow-hidden relative group ${item.span || ''}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
