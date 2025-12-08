'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import zeoxon from '@public/assets/images/Zeoxon2.jpeg';

export default function ZeoxonCZ() {
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
              src={zeoxon}
              alt="Zeoxon CZ Effervescent Tablets"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Zeoxon CZ Effervescent Tablets</h1>
            <p className="text-lg text-zinc-600">Daily effervescent immunity booster — Vitamin C, Vitamin D3 & Zinc</p>
          </div>
        </div>

        {/* Composition Section */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each effervescent tablet contains:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Vitamin C (Ascorbic Acid) — 500 mg</li>
            <li>Vitamin D3 (Cholecalciferol) — 1000 IU</li>
            <li>Zinc (as Zinc sulfate or Zinc gluconate) — 10 mg</li>
            <li>Effervescent excipients & natural/approved flavouring — Q.S.</li>
            <li>Sugar-free formulation</li>
          </ul>
        </section>

        {/* Usage Section */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Zeoxon CZ and What is it Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Zeoxon CZ is a convenient effervescent tablet designed to support and maintain a healthy immune system. Combining Vitamin C, Vitamin D3 and Zinc, this fast-dissolving tablet helps protect against everyday stressors, supports normal immune response, and contributes to reduced tiredness and fatigue.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li className="mb-3">
              <strong>Vitamin C:</strong> Supports immune defense and acts as a powerful antioxidant.
            </li>
            <li className="mb-3">
              <strong>Vitamin D3:</strong> Helps modulate immune responses and supports bone health.
            </li>
            <li className="mb-3">
              <strong>Zinc:</strong> Essential for immune cell function and recovery from minor illnesses.
            </li>
            <li className="mb-3">
              <strong>Effervescent format:</strong> Rapid absorption and pleasant to take — a fizzy daily drink in seconds.
            </li>
          </ul>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">
            Do not use Zeoxon CZ if you are allergic to any of its ingredients. Consult your healthcare professional before use if you:
          </p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are pregnant, planning pregnancy, or breastfeeding.</li>
            <li>Have kidney disease or are on a sodium- or potassium-restricted diet (effervescent formulations may contain salts).</li>
            <li>Are taking other vitamin, mineral, or medication supplements — especially mineral supplements containing zinc or copper.</li>
            <li>Have a history of hypercalcaemia or hypervitaminosis D.</li>
          </ul>
          <p className="text-zinc-600 mt-4">
            If you are on regular medication (e.g., antibiotics, diuretics, or certain antiepileptics), check with your healthcare professional before starting Zeoxon CZ due to potential interactions.
          </p>
        </section>

        {/* Dosage Section */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Zeoxon CZ?</h2>
          <p className="text-zinc-600 mb-4">
            Recommended adult dose (unless otherwise prescribed):
          </p>
          <ul className="list-disc list-inside text-zinc-600 mb-4">
            <li>Adults and children over 12 years: 1 effervescent tablet dissolved in a glass of water (200–250 ml) once daily.</li>
            <li>Children under 12 years: Consult a healthcare professional for appropriate dosing.</li>
          </ul>
          <p className="text-zinc-600 mb-4">
            Dissolve the tablet fully before drinking. Do not exceed the recommended daily dose. For long-term or high-dose use, seek medical advice.
          </p>

          <h2 className="text-xl font-semibold text-zinc-700 my-4">Overdose</h2>
          <p className="text-zinc-600 mb-4">
            In case of suspected overdose, contact your healthcare professional or poison control immediately. Symptoms may include gastrointestinal discomfort, nausea, or vomiting.
          </p>

          <h2 className="text-xl font-semibold text-zinc-700 my-4">Missed Dose</h2>
          <p className="text-zinc-600 mb-4">
            If you miss a dose, take it when you remember. Do not take a double dose to make up for a missed one.
          </p>
        </section>

        {/* Side Effects Section */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Zeoxon CZ is generally well tolerated. Mild side effects may include stomach upset, diarrhoea, or nausea. High doses of zinc may cause metallic taste or gastrointestinal irritation in some individuals. If you experience any severe or persistent side effects, discontinue use and consult your healthcare professional.
          </p>
        </section>

        {/* Storage Section */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store Zeoxon CZ?</h2>
          <p className="text-zinc-600">
            Store in a cool, dry place below 25°C, away from direct sunlight and moisture. Keep the tube tightly closed when not in use and out of reach of children. Do not use after the expiry date printed on the label.
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
