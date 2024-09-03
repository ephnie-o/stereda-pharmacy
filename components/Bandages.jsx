'use client';
import Image from 'next/image';
import { useRef } from 'react';
import whitebandage2 from '@public/assets/images/whitebandage2".jpeg';
import whitebandage4 from '@public/assets/images/whitebandage4".jpeg';
import whitebandage6 from '@public/assets/images/whitebandage6".jpeg';
import brownbandage2 from '@public/assets/images/brownbandage2".jpeg';
import brownbandage4 from '@public/assets/images/brownbandage4".jpeg';
import brownbandage6 from '@public/assets/images/brownbandage6".jpeg';

export default function Bandages() {
  // Refs for sections
  const white2Ref = useRef(null);
  const white4Ref = useRef(null);
  const white6Ref = useRef(null);
  const brown2Ref = useRef(null);
  const brown4Ref = useRef(null);
  const brown6Ref = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Left-side Vertical Navigation Menu */}
      <nav className="bg-white shadow-md py-4 px-4 flex flex-col space-y-2">
        <button onClick={() => scrollToSection(white2Ref)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">White Elastic Bandage 2-Inch</button>
        <button onClick={() => scrollToSection(white4Ref)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">White Elastic Bandage 4-Inch</button>
        <button onClick={() => scrollToSection(white6Ref)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">White Elastic Bandage 6-Inch</button>
        <button onClick={() => scrollToSection(brown2Ref)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Brown Elastic Bandage 2-Inch</button>
        <button onClick={() => scrollToSection(brown4Ref)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Brown Elastic Bandage 4-Inch</button>
        <button onClick={() => scrollToSection(brown6Ref)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Brown Elastic Bandage 6-Inch</button>
      </nav>

      <div className="container mx-auto px-4">
        {/* White Elastic Bandage Sections */}
        <section ref={white2Ref} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">White Elastic Bandage 2-Inch</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={whitebandage2} alt="White Elastic Bandage 2-Inch" width={300} height={200} className="rounded-md shadow-lg" />
            <p className="text-zinc-600 mt-4 md:mt-0 md:ml-8">
              A versatile 2-inch white elastic bandage designed for secure compression and support, ideal for wrapping injuries, sprains, and strains. Durable, breathable, and easy to apply, it provides comfortable and effective stabilization for joints and muscles.
            </p>
          </div>
        </section>

        <section ref={white4Ref} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">White Elastic Bandage 4-Inch</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={whitebandage4} alt="White Elastic Bandage 4-Inch" width={300} height={200} className="rounded-md shadow-lg" />
            <p className="text-zinc-600 mt-4 md:mt-0 md:ml-8">
              A 4-inch white elastic bandage offering reliable compression and support for larger areas like knees, elbows, and ankles. Ideal for managing injuries, sprains, or swelling, it provides a secure, comfortable fit while allowing flexibility and breathability.
            </p>
          </div>
        </section>

        <section ref={white6Ref} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">White Elastic Bandage 6-Inch</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={whitebandage6} alt="White Elastic Bandage 6-Inch" width={300} height={200} className="rounded-md shadow-lg" />
            <p className="text-zinc-600 mt-4 md:mt-0 md:ml-8">
              A 6-inch white elastic bandage designed for effective compression and support of larger areas, such as the thigh, chest, or shoulder. Ideal for managing significant injuries, sprains, or post-surgical care, it ensures a secure, comfortable fit with excellent flexibility and breathability.
            </p>
          </div>
        </section>

        {/* Brown Elastic Bandage Sections */}
        <section ref={brown2Ref} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Brown Elastic Bandage 2-Inch</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={brownbandage2} alt="Brown Elastic Bandage 2-Inch" width={300} height={200} className="rounded-md shadow-lg" />
            <p className="text-zinc-600 mt-4 md:mt-0 md:ml-8">
              A 2-inch brown elastic bandage designed for secure compression and support of small areas like wrists and ankles. Perfect for treating minor injuries, sprains, or strains, it offers a comfortable fit with a discreet appearance, flexibility, and breathability.
            </p>
          </div>
        </section>

        <section ref={brown4Ref} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Brown Elastic Bandage 4-Inch</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={brownbandage4} alt="Brown Elastic Bandage 4-Inch" width={300} height={200} className="rounded-md shadow-lg" />
            <p className="text-zinc-600 mt-4 md:mt-0 md:ml-8">
              A 4-inch brown elastic bandage ideal for providing compression and support to medium-sized areas like knees, calves, or elbows. It effectively helps manage injuries, sprains, or swelling while offering a comfortable, flexible fit with a discreet, natural look.
            </p>
          </div>
        </section>

        <section ref={brown6Ref} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Brown Elastic Bandage 6-Inch</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={brownbandage6} alt="Brown Elastic Bandage 6-Inch" width={300} height={200} className="rounded-md shadow-lg" />
            <p className="text-zinc-600 mt-4 md:mt-0 md:ml-8">
              A 6-inch brown elastic bandage designed for robust compression and support of larger areas like thighs, chest, or shoulders. Ideal for managing more extensive injuries, sprains, or post-surgical recovery, it offers a secure, flexible fit with a natural appearance and breathable comfort.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}