'use client'
import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import blockfactory from '@public/assets/images/blockfactory.jpeg'
import adade from '@public/assets/images/adade.jpg'
import afrikiko from '@public/assets/images/afrikiko.jpeg'
import fijai from '@public/assets/images/fijai.jpg'
import sterevite from '@public/assets/images/sterevite.jpg'
import steremed from '@public/assets/images/steremed.jpg'
import sterecol from '@public/assets/images/sterecol.jpeg'
import whitebandage2 from '@public/assets/images/whitebandage2".jpeg'
import whitebandage4 from '@public/assets/images/whitebandage4".jpeg'
import whitebandage6 from '@public/assets/images/whitebandage6".jpeg'
import brownbandage2 from '@public/assets/images/brownbandage2".jpeg'
import brownbandage4 from '@public/assets/images/brownbandage4".jpeg'
import brownbandage6 from '@public/assets/images/brownbandage6".jpeg'

export default function Home() {
    const images = [
        { src: sterevite, alt: 'STEREVITE SYRUP' },
        { src: steremed, alt: 'STEREMED SYRUP' },
        { src: sterecol, alt: 'STERECOL GUMMIES' },
        { src: whitebandage2, alt: 'WHITE HIGH ELASTIC BANDAGE 2-INCHES' },
        { src: whitebandage4, alt: 'WHITE HIGH ELASTIC BANDAGE 4-INCHES' },
        { src: whitebandage6, alt: 'WHITE HIGH ELASTIC BANDAGE 6-INCHES' },
        { src: brownbandage2, alt: 'BROWN HIGH ELASTIC BANDAGE 2-INCHES' },
        { src: brownbandage4, alt: 'BROWN HIGH ELASTIC BANDAGE 4-INCHES' },
        { src: brownbandage6, alt: 'BROWN HIGH ELASTIC BANDAGE 6-INCHES' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
    const slideshowInterval = useRef(null);

    useEffect(() => {
        // Set up a timer to automatically change slides every 3 seconds
        slideshowInterval.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000 ms = 3 seconds

        return () => clearInterval(slideshowInterval.current); // Clear the interval when the component unmounts
    }, [images.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-gradient-to-b from-green-400 to-green-700 py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-50">Stereda Pharmaceuticals Limited</h2>
                    <p className="text-lg mb-6 text-zinc-600">
                        We make it our mandate to provide you with the best pharmaceutical service,
                        guided by the need to promote and facilitate your journey towards healthy living.
                    </p>
                    <div className='transition-transform duration-300 transform hover:scale-125'>
                        <Link href="/shopnow" className="bg-red-500 font-bold text-white px-8 py-3 rounded-full">Shop Now</Link>
                    </div>
                </div>
            </header>

            {/* Slideshow Carousel for Products */}
            <section className="py-10 relative">
                <div className="container mx-auto">
                    <h3 className="text-2xl text-green-700 font-bold text-center mb-8">Our Products</h3>
                    <div className="relative w-full h-screen overflow-hidden rounded-lg shadow-lg">
                        {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg"
                            />
                        </div>
                        ))}
                        {/* Navigation Controls */}
                        <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
                        &#8249;
                        </button>
                        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
                        &#8250;
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h3 className="text-2xl text-green-700 font-bold text-center mb-8">Locate a Branch Near You</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <Link href='/contactus' className="shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Image src={blockfactory} alt="Weija Branch" className="w-full" />
                            <div className="p-4 text-zinc-600 font-semibold">
                                <h4 className="text-lg font-bold text-green-700">WEIJA BRANCH</h4>
                                <p>No. ANT 7/2 Aplaku Newtown Weija Accra</p>
                                <p>Opp. Petrosol Filling Station, Block Factory-Kasoa Rd</p>
                                <p>Tel: 0302851906 / 0249009988</p>
                            </div>
                        </Link>

                        <Link href='/contactus' className="shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Image src={adade} alt="Adade Branch" className="w-full" />
                            <div className="p-4 text-zinc-600 font-semibold">
                                <h4 className="text-lg font-bold text-green-700">ADADE BRANCH</h4>
                                <p>Adade Junction Opp. Nick Petroleum Filling Station</p>
                                <p>Nyanyano Road - Kasoa Kakraba</p>
                                <p>Tel: 0302904755 / 0249009988</p>
                            </div>
                        </Link>

                        <Link href='/contactus' className="shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Image src={fijai} alt="Fijai Branch" className="w-full" />
                            <div className="p-4 text-zinc-600 font-semibold">
                                <h4 className="text-lg font-bold text-green-700">KASOA FIJAI BRANCH</h4>
                                <p>Fijai Junction - Kasoa Nyanyano Road</p>
                                <p>Tel: 0302951044 / 0249009988</p>
                            </div>
                        </Link>

                        <Link href='/contactus' className="shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Image src={afrikiko} alt="Afrikiko Branch" className="w-full" />
                            <div className="p-4 text-zinc-600 font-semibold">
                                <h4 className="text-lg font-bold text-green-700">AFRIKIKO BRANCH</h4>
                                <p>Afrikiko Liberation Road</p>
                                <p>Tel: 0302952997 / 0249009988</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}