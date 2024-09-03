'use client';
import Image from 'next/image';
import { useRef } from 'react';
import sterecol from '@public/assets/images/sterecol.jpeg';

export default function Sterecol() {
  // Refs for sections
  const benefitsRef = useRef(null);
  const ingredientsRef = useRef(null);
  const usageRef = useRef(null);
  const precautionsRef = useRef(null);
  const sideEffectsRef = useRef(null);
  const storageRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Left-side Vertical Navigation Menu */}
      <nav className="bg-white shadow-md py-4 px-4 flex flex-col space-y-1">
        <button onClick={() => scrollToSection(benefitsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Health Benefits</button>
        <button onClick={() => scrollToSection(ingredientsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Ingredients</button>
        <button onClick={() => scrollToSection(usageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Usage Instructions</button>
        <button onClick={() => scrollToSection(precautionsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Precautions</button>
        <button onClick={() => scrollToSection(sideEffectsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Possible Side Effects</button>
        <button onClick={() => scrollToSection(storageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Storage Information</button>
        <button onClick={() => scrollToSection(contactRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Contact Information</button>
      </nav>


      <div className="container mx-auto px-4">
        {/* Product Image and Title */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={sterecol}
              alt="Sterecol Night Gummies"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Sterecol Night Gummies</h1>
            <p className="text-lg text-zinc-600">Melatonin with Ashwagandha & Lemon Balm</p>
          </div>
        </div>

        {/* Ingredients Section */}
        <section ref={ingredientsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Ingredients</h2>
          <p className="text-zinc-600 mb-2">Each Serving (1 Gummy) Contains:</p>
          <ul className="list-disc list-inside text-zinc-600 space-y-2">
            <li>Melatonin: 10 mg</li>
            <li>Ashwagandha Extract: 25 mg</li>
            <li>Lemon Balm: 5 mg</li>
          </ul>
        </section>

        {/* Health Benefits Section */}
        <section ref={benefitsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Health Benefits</h2>
          <ul className="list-disc list-inside text-zinc-600 space-y-2">
            <li>Regulates sleep-wake cycles and promotes restful sleep.</li>
            <li>Relieves anxiety and stress for a calm and peaceful mind.</li>
            <li>Supports deep sleep, helping you fall asleep faster.</li>
            <li>Elevates mood and keeps the mind calm and alert.</li>
          </ul>
        </section>

        {/* Usage Instructions */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Usage Instructions</h2>
          <p className="text-zinc-600 mb-4">
            Take one gummy daily, preferably 30 minutes before bedtime, or as directed by a healthcare professional. Do not exceed the recommended dosage.
          </p>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <ul className="list-disc list-inside text-zinc-600 space-y-2">
            <li>Consult with your healthcare provider before use if you are pregnant, breastfeeding, or have a medical condition.</li>
            <li>Do not use if you are allergic to any of the ingredients.</li>
            <li>Avoid driving or operating machinery if you feel drowsy after consumption.</li>
            <li>Not recommended for children under 18 years of age.</li>
          </ul>
        </section>

        {/* Possible Side Effects Section */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            While Sterecol Night Gummies are generally safe, some users may experience mild side effects, such as:
          </p>
          <ul className="list-disc list-inside text-zinc-600 space-y-2">
            <li>Stomach upset or nausea</li>
            <li>Dizziness or headache</li>
            <li>Mild drowsiness</li>
            <li>If any severe reactions occur, discontinue use and seek medical attention immediately.</li>
          </ul>
        </section>

        {/* Storage Information */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Storage Information</h2>
          <p className="text-zinc-600">
            Store in a cool, dry place below 25°C. Keep away from direct sunlight. Keep out of reach of children. Pouches are not to be sold loose.
          </p>
        </section>

        {/* Contact Information */}
        <section ref={contactRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Further Information</h2>
          <p className="text-zinc-600">For more information, contact:</p>
          <p className="text-zinc-600">Stereda Pharmaceuticals Ltd, No ANT 7/2 Aplaku New Town, Weija Accra, Ghana</p>
          <p className="text-zinc-600">0249009988</p>
        </section>
      </div>
    </div>
  );
}