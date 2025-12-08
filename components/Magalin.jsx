'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import magalin from '@public/assets/images/magalin.jpeg';

export default function Magalin() {
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
              src={magalin}
              alt="Magalin Pregabalin & Methylcobalamin Capsules"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Magalin Capsules</h1>
            <p className="text-lg text-zinc-600">Pregabalin & Methylcobalamin — Nerve pain relief and nerve support</p>
          </div>
        </div>

        {/* Composition */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each hard gelatin capsule contains (as labelled):</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Pregabalin BP — 75 mg</li>
            <li>Methylcobalamin USP — 750 µg</li>
            <li>Excipients & capsule shell — Q.S.</li>
          </ul>
        </section>

        {/* Usage */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Magalin Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Magalin combines pregabalin (for neuropathic pain modulation) with methylcobalamin (a bioactive form of Vitamin B12 that supports nerve repair). It is commonly used to relieve burning, tingling, numbness and other symptoms of neuropathic pain — for example in diabetic neuropathy, post-herpetic neuralgia, and nerve compression injuries.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Reduces nerve-related pain and abnormal nerve signalling.</li>
            <li>Methylcobalamin supports nerve regeneration and function.</li>
            <li>Helps improve sleep and quality of life by reducing chronic nerve pain.</li>
          </ul>
        </section>

        {/* Precautions */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">
            Magalin should be taken under medical supervision. Do not take if you are allergic to pregabalin, methylcobalamin, or any excipients. Inform your healthcare provider if you:
          </p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Have kidney impairment — dose adjustments may be needed.</li>
            <li>Are pregnant or breastfeeding — discuss benefits and risks with your doctor.</li>
            <li>Are taking other central nervous system depressants (e.g., opioids, sedatives).</li>
            <li>Have a history of allergy to vitamins or anticonvulsant drugs.</li>
          </ul>
          <p className="text-zinc-600 mt-4">If you experience severe dizziness, swelling, rash, or breathing difficulty, discontinue and seek medical help immediately.</p>
        </section>

        {/* Dosage */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Magalin</h2>
          <p className="text-zinc-600 mb-4">
            Use Magalin exactly as prescribed by your healthcare professional. The product labelling advises that dosage should be determined by a physician. Do not alter the dose without medical advice.
          </p>
          <p className="text-zinc-600 mb-4">Swallow capsules whole. If you miss a dose, take it as soon as you remember unless close to the next dose—do not double up.</p>

          <h3 className="text-xl font-semibold text-zinc-700 my-4">Overdose</h3>
          <p className="text-zinc-600 mb-4">In case of suspected overdose, seek emergency medical care. Keep the product out of reach of children.</p>
        </section>

        {/* Side Effects */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Magalin may cause mild side effects including dizziness, drowsiness, weight gain, dry mouth, or gastrointestinal upset. Methylcobalamin is generally well tolerated. If you notice allergic reactions, severe dizziness, or mood/behaviour changes, contact your healthcare professional.
          </p>
        </section>

        {/* Storage */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Storage</h2>
          <p className="text-zinc-600">Store below 30°C in a dry place. Protect from light and moisture. Keep out of reach of children. Do not use after the expiry date shown on the pack.</p>
        </section>

        {/* Contact Info */}
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
