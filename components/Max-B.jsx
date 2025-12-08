'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import maxb from '@public/assets/images/MaxB2.jpeg';

export default function MaxB() {
  // Refs for sections
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
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Scroll refs={refs} />

      <div className="container mx-auto px-4">
        {/* Product Image and Title */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={maxb}
              alt="Max-B Vitamin B-Complex Tablets"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Max-B Vitamin B-Complex</h1>
            <p className="text-lg text-zinc-600">Complete B-vitamin support for healthy nerves, muscles and energy</p>
          </div>
        </div>

        {/* Composition Section */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each tablet contains (typical formulation):</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Vitamin B1 (Thiamine) — 1.5 mg</li>
            <li>Vitamin B2 (Riboflavin) — 1.7 mg</li>
            <li>Vitamin B3 (Niacin) — 20 mg</li>
            <li>Vitamin B5 (Pantothenic acid) — 10 mg</li>
            <li>Vitamin B6 (Pyridoxine) — 2 mg</li>
            <li>Vitamin B7 (Biotin) — 50 µg</li>
            <li>Vitamin B9 (Folic acid) — 400 µg</li>
            <li>Vitamin B12 (Cyanocobalamin / Methylcobalamin) — 50 µg</li>
            <li>Support excipients & coating — Q.S.</li>
          </ul>
        </section>

        {/* Usage Section */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Max-B and What is it Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Max-B is a balanced vitamin B-complex designed to support energy metabolism, healthy nerve function, and normal psychological function. The B-vitamins work together to help convert food into energy, reduce tiredness and fatigue, and support healthy skin, hair and red blood cell formation.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li className="mb-3"><strong>Energy support:</strong> Helps convert carbohydrates, fats and proteins into usable energy.</li>
            <li className="mb-3"><strong>Nerve & muscle health:</strong> Supports proper nerve signalling and muscle function.</li>
            <li className="mb-3"><strong>Haematinic support:</strong> Contributes to normal red blood cell formation and haemoglobin synthesis (with B12 & folate).</li>
            <li className="mb-3"><strong>Mood & cognition:</strong> B-vitamins contribute to normal psychological function and stress resilience.</li>
          </ul>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">
            Do not use Max-B if you are allergic to any of its ingredients. Speak to your healthcare professional before use if you:
          </p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are pregnant, planning pregnancy, or breastfeeding.</li>
            <li>Have kidney or liver impairment.</li>
            <li>Are taking prescription medicines (especially anticonvulsants, certain antibiotics, or medicines that affect vitamin absorption).</li>
            <li>Have a history of allergy to vitamin supplements.</li>
          </ul>
          <p className="text-zinc-600 mt-4">
            Vitamins are intended to complement the diet and should not replace a balanced diet and healthy lifestyle.
          </p>
        </section>

        {/* Dosage Section */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Max-B?</h2>
          <p className="text-zinc-600 mb-4">
            Recommended adult dose (unless otherwise directed by a healthcare professional):
          </p>
          <ul className="list-disc list-inside text-zinc-600 mb-4">
            <li>Adults and children over 12 years: 1 tablet daily, with a meal.</li>
            <li>Children under 12 years: Use only on medical advice.</li>
          </ul>
          <p className="text-zinc-600 mb-4">Do not exceed the recommended daily dose. For targeted therapeutic dosing (e.g., higher B12 for deficiency), consult your healthcare professional.</p>

          <h2 className="text-xl font-semibold text-zinc-700 my-4">Overdose</h2>
          <p className="text-zinc-600 mb-4">
            In case of suspected overdose, seek medical advice. Large doses of some B vitamins may cause flushing, stomach upset or, rarely, neurological symptoms.
          </p>

          <h2 className="text-xl font-semibold text-zinc-700 my-4">Missed Dose</h2>
          <p className="text-zinc-600 mb-4">
            If you miss a dose, take it when you remember unless it is almost time for the next dose. Do not double the dose to make up for a missed one.
          </p>
        </section>

        {/* Side Effects Section */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Max-B is generally well tolerated. Possible mild side effects include gastrointestinal discomfort (nausea, stomach upset), headache, or skin reactions in sensitive individuals. If you experience severe or persistent adverse effects, discontinue use and seek medical attention.
          </p>
        </section>

        {/* Storage Section */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store Max-B?</h2>
          <p className="text-zinc-600">
            Store in a cool, dry place below 25°C away from direct sunlight. Keep the product tightly closed and out of reach of children. Do not use after the expiry date printed on the pack.
          </p>
        </section>

        {/* Contact Info Section */}
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
