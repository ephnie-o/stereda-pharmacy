'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import maxb12 from '@public/assets/images/MaxB12Gummies.jpeg';

export default function MaxB12Gummies() {
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
              src={maxb12}
              alt="Max B12 Vitamin B12 Gummies"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Max B12 Gummies</h1>
            <p className="text-lg text-zinc-600">
              Haemoglobin Enhancer • Delicious Vitamin B12 Supplement
            </p>
          </div>
        </div>

        {/* Composition Section */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each gummy contains:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Vitamin B12 (Methylcobalamin) — 1500 µg</li>
            <li>Natural fruit flavour base — Q.S.</li>
            <li>Gelatin-free and gluten-free formulation</li>
          </ul>
        </section>

        {/* Usage Section */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Max B12 and What is it Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Max B12 Gummies are a tasty and effective way to boost your Vitamin B12 levels naturally. Specially formulated to support healthy haemoglobin levels, energy metabolism, and nerve function, they help combat fatigue and Vitamin B12 deficiency while promoting overall vitality.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li className="mb-3">
              <strong>Vitamin B12:</strong> Supports red blood cell formation, energy metabolism, and neurological function.
            </li>
            <li className="mb-3">
              <strong>Delicious taste:</strong> Easy to take daily with a fruit-flavoured chewable gummy — no pills required.
            </li>
            <li className="mb-3">
              <strong>Vegan-friendly & gelatin-free:</strong> Suitable for various dietary preferences and lifestyles.
            </li>
          </ul>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">
            Do not use Max B12 Gummies if you are allergic to Vitamin B12 or any of the ingredients. Consult your healthcare professional before use if you:
          </p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are pregnant or breastfeeding.</li>
            <li>Have a history of megaloblastic anaemia or other blood disorders.</li>
            <li>Have kidney or liver disease.</li>
            <li>Are currently taking medications that affect Vitamin B12 absorption (e.g., metformin or proton pump inhibitors).</li>
          </ul>
          <p className="text-zinc-600 mt-4">
            Vitamins are intended to supplement the diet and should not replace a balanced nutrition plan.
          </p>
        </section>

        {/* Dosage Section */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Max B12 Gummies?</h2>
          <p className="text-zinc-600 mb-4">
            Recommended adult dose (unless otherwise advised by a healthcare professional):
          </p>
          <ul className="list-disc list-inside text-zinc-600 mb-4">
            <li>Adults and children above 12 years: 1 gummy daily, preferably after a meal.</li>
            <li>Children 7–12 years: Consult a healthcare provider for proper dosage.</li>
          </ul>
          <p className="text-zinc-600 mb-4">
            Chew the gummy thoroughly before swallowing. Do not exceed the recommended daily dose.
          </p>

          <h2 className="text-xl font-semibold text-zinc-700 my-4">Overdose</h2>
          <p className="text-zinc-600 mb-4">
            Overdose is rare, as Vitamin B12 is water-soluble. However, excessive intake may cause mild headache, nausea, or acne-like rashes. Seek medical advice if any unusual symptoms occur.
          </p>

          <h2 className="text-xl font-semibold text-zinc-700 my-4">Missed Dose</h2>
          <p className="text-zinc-600 mb-4">
            If you miss a dose, take it when you remember. Do not double the dose to make up for a missed one.
          </p>
        </section>

        {/* Side Effects Section */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Max B12 Gummies are generally safe and well-tolerated. Mild side effects such as upset stomach, mild skin rash, or nausea are rare. Discontinue use and consult a healthcare provider if any allergic reaction or persistent discomfort occurs.
          </p>
        </section>

        {/* Storage Section */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store Max B12 Gummies?</h2>
          <p className="text-zinc-600">
            Store in a cool, dry place below 25°C, away from direct sunlight. Keep tightly closed and out of reach of children. Do not use after the expiry date printed on the label or packaging.
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
