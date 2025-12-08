'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import stereel from '@public/assets/images/steree-l.jpeg';

export default function StereeL() {
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
              src={stereel}
              alt="Steree-L Levocetirizine & Montelukast Syrup"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Steree-L Syrup</h1>
            <p className="text-lg text-zinc-600">Levocetirizine Dihydrochloride & Montelukast — Allergy & respiratory support</p>
          </div>
        </div>

        {/* Composition */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each 5 ml contains (as labelled):</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Levocetirizine Dihydrochloride USP — 2.5 mg</li>
            <li>Montelukast Sodium BP (Eq. to Montelukast) — 4 mg</li>
            <li>Flavoured syrup base & excipients — Q.S.</li>
          </ul>
        </section>

        {/* Usage */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Steree-L Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Steree-L combines an antihistamine (levocetirizine) with a leukotriene receptor antagonist (montelukast) to help manage allergic rhinitis, seasonal allergies, and certain asthma-related symptoms. It relieves sneezing, nasal itchiness, runny nose, and helps control recurring allergic episodes.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Reduces allergy symptoms like sneezing and nasal discharge.</li>
            <li>Helps reduce airway inflammation associated with allergic reactions.</li>
            <li>Child-friendly syrup formulation for easier administration.</li>
          </ul>
        </section>

        {/* Precautions */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">
            Do not use Steree-L if you are hypersensitive to levocetirizine, montelukast, or any excipients. Consult a healthcare professional before use if you:
          </p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are pregnant or breastfeeding.</li>
            <li>Have a history of liver disease or severe asthma — consult your physician.</li>
            <li>Are taking other allergy or asthma medications — avoid combinations unless directed by a doctor.</li>
            <li>Have known allergy to bee products or related substances (if present in excipients).</li>
          </ul>
          <p className="text-zinc-600 mt-4">If you notice severe allergic reactions or behavioural changes, discontinue and seek medical advice.</p>
        </section>

        {/* Dosage */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Steree-L</h2>
          <p className="text-zinc-600 mb-4">
            Use Steree-L only as directed by your physician. The product packaging lists composition per 5 ml and indicates that dosage should be determined by a healthcare professional.
          </p>
          <p className="text-zinc-600 mb-4">Shake well before use. If symptoms persist or worsen, contact your healthcare provider.</p>

          <h3 className="text-xl font-semibold text-zinc-700 my-4">Overdose & Missed Dose</h3>
          <p className="text-zinc-600 mb-4">In case of suspected overdose, seek urgent medical attention. If a dose is missed, give it when remembered unless it's near the time for the next dose—do not double up.</p>
        </section>

        {/* Side Effects */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Steree-L is generally well tolerated. Mild side effects may include drowsiness, headache, stomach upset, or rare allergic reactions. Report severe or persistent symptoms to your healthcare professional.
          </p>
        </section>

        {/* Storage */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Storage</h2>
          <p className="text-zinc-600">Store below 30°C, protect from light and moisture. Keep out of reach of children. Do not use after the expiry date marked on the pack.</p>
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
