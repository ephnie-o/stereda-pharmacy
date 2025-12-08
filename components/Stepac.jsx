'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import stepac from '@public/assets/images/stepac.jpeg';

export default function Stepac() {
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
              src={stepac}
              alt="Stepac Aceclofenac & Paracetamol Tablets"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Stepac Tablets</h1>
            <p className="text-lg text-zinc-600">Aceclofenac & Paracetamol — Fast relief from pain and inflammation</p>
          </div>
        </div>

        {/* Composition */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each film-coated tablet contains:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Aceclofenac BP — 100 mg</li>
            <li>Paracetamol BP — 500 mg</li>
            <li>Excipients & coating — Q.S.</li>
          </ul>
        </section>

        {/* Usage */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Stepac Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Stepac combines an anti-inflammatory (aceclofenac) with a pain-relieving/antipyretic agent (paracetamol) to provide rapid relief from acute and chronic pain — including headaches, dental pain, musculoskeletal pain, backache, joint pain, and menstrual cramps.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Reduces pain and inflammation.</li>
            <li>Helps lower fever and improves comfort.</li>
            <li>Convenient combination therapy for multi-symptom relief.</li>
          </ul>
        </section>

        {/* Precautions */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">
            Do not take Stepac if you are allergic to aceclofenac, paracetamol, NSAIDs, or any other ingredients. Speak with a healthcare professional before use if you:
          </p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Have a history of peptic ulcer disease, gastrointestinal bleeding, or severe liver disease.</li>
            <li>Have kidney impairment or heart failure.</li>
            <li>Are taking blood-thinning medications or other NSAIDs.</li>
            <li>Are pregnant or breastfeeding — consult your doctor first.</li>
          </ul>
          <p className="text-zinc-600 mt-4">If you experience allergic symptoms (e.g., swelling, breathing difficulty, rash), stop use and seek medical attention immediately.</p>
        </section>

        {/* Dosage */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Stepac</h2>
          <p className="text-zinc-600 mb-4">
            Use Stepac exactly as prescribed by your healthcare professional. The packaging also indicates: <strong>Dosage: As directed by the physician.</strong>
          </p>
          <p className="text-zinc-600 mb-4">Do not exceed the recommended dose. If pain or fever persists, consult your doctor.</p>
          <h3 className="text-xl font-semibold text-zinc-700 my-4">Overdose</h3>
          <p className="text-zinc-600 mb-4">In case of suspected overdose, seek immediate medical attention. Symptoms may include nausea, vomiting, abdominal pain, dizziness or confusion.</p>
        </section>

        {/* Side Effects */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Stepac is generally well tolerated but may cause gastrointestinal discomfort, nausea, dizziness, headache, or rarely allergic skin reactions. If you experience severe abdominal pain, black stools, or any signs of allergic reaction, discontinue use and consult a healthcare professional.
          </p>
        </section>

        {/* Storage */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Storage</h2>
          <p className="text-zinc-600">Store below 30°C in a dry place. Protect from light and moisture. Keep out of reach of children.</p>
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
