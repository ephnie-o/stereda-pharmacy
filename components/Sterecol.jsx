'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import sterecol from '@public/assets/images/sterecol.jpeg';

export default function Sterecol() {
  const compositionRef = useRef(null);
  const usageRef = useRef(null);
  const precautionsRef = useRef(null);
  const dosageRef = useRef(null);
  const sideEffectsRef = useRef(null);
  const storageRef = useRef(null);
  const infoRef = useRef(null);

  const refs = {
    compositionRef,
    usageRef,
    precautionsRef,
    dosageRef,
    sideEffectsRef,
    storageRef,
    infoRef
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Scroll refs={refs}/>
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
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each Serving (1 Gummy) Contains:</p>
          <ul className="list-disc list-inside text-zinc-600 space-y-2">
            <li>Melatonin: 10 mg</li>
            <li>Ashwagandha Extract: 25 mg</li>
            <li>Lemon Balm: 5 mg</li>
          </ul>
        </section>

        {/* Usage Information */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Sterecol Gummies and What is it Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Sterecol gummies contains Melatonin, Ashwagandha extract and Lemon balm.
          </p>
          <h2 className="text-xl font-bold text-green-700 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-zinc-600 space-y-2">
            <li>Regulates sleep-wake cycles and promotes restful sleep.</li>
            <li>Relieves anxiety and stress for a calm and peaceful mind.</li>
            <li>Supports deep sleep, helping you fall asleep faster.</li>
            <li>Elevates mood and keeps the mind calm and alert.</li>
          </ul>
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

        {/* Dosage Information */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Sterecol Gummies?</h2>
          <p className="text-zinc-600 mb-4">
            Take one gummy daily, preferably 30 minutes before bedtime, or as directed by a healthcare professional. Do not exceed the recommended dosage.
          </p>
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
        <section ref={infoRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Further Information</h2>
          <p className="text-zinc-600">For more information, contact:</p>
          <p className="text-zinc-600">Stereda Pharmaceuticals Ltd, No ANT 7/2 Aplaku New Town, Weija Accra, Ghana</p>
          <p className="text-zinc-600">0249009988</p>
        </section>
      </div>
    </div>
  );
}