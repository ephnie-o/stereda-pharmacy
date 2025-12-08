'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import respizeal from '@public/assets/images/Respizeal2.jpeg';

export default function SteredexLs() {
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
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Scroll refs={refs} />

      <div className="container mx-auto px-4">
        {/* Product Image and Title */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={respizeal}
              alt="Respizeal Syrup"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Respizeal Herbal Cough Syrup</h1>
            <p className="text-lg text-zinc-600">Mother Nature’s Remedy for Sore Throat, Cold, and Cough</p>
          </div>
        </div>

        {/* Composition Section */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each Serving 5 ml Contains:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Ivy Leaf Extract (Hedera helix L.) – 35 mg</li>
            <li>Propolis Extract – 10 mg</li>
            <li>Natural Herbal Syrup Base – Q.S.</li>
            <li>Flavouring and Colouring Agents – Q.S..</li>
          </ul>
        </section>

        {/* Usage Information */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Respizeal and What is it Used For?</h2>
          <p className="text-zinc-600 mb-4">
          Respizeal Syrup is a natural herbal formulation that provides effective relief from sore throat, cough, and congestion. Enriched with ivy leaf and propolis extracts, it supports healthy respiratory function and soothes irritation caused by cold or infections.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li className="mb-3">
              <strong>Ivy Leaf Extract:</strong> Helps clear mucus from the airways, easing breathing and reducing chest congestion.
            </li>
            <li className="mb-3">
              <strong>Propolis Extract:</strong> Acts as a natural antimicrobial agent to soothe sore throats and boost immune defense.
            </li>
            <li className="mb-3">
              <strong>Herbal Syrup Base:</strong> Provides a pleasant taste and gentle soothing effect, ideal for adults and children alike.
            </li>
          </ul>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">Do not take Respizeal if you are allergic to ivy leaf, propolis, or any other ingredients in the formula. Consult your healthcare professional before using if you:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are pregnant or breastfeeding.</li>
            <li>Have asthma or other chronic respiratory diseases.</li>
            <li>Have kidney or liver problems.</li>
            <li>Are taking other cough, cold, or allergy medications.</li>
          </ul>
          <p className="text-zinc-600 mt-4">Avoid combining with other cough syrups unless advised by a healthcare professional. Always follow the prescribed dosage instructions.</p>
        </section>

        {/* Dosage Information */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Respizeal Syrup?</h2>
          <p className="text-zinc-600 mb-4">
            The usual dose for adults and children over 12 years is 5 - 10 ml once daily as needed or as directed by your healthcare professional. Do not exceed the recommended dosage. Shake well before use.
          </p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">OVERDOSE</h2>
          <p className="text-zinc-600 mb-4">In case of accidental overdose, seek medical advice immediately. Symptoms may include nausea, vomiting, or gastrointestinal discomfort.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">Missed Dose</h2>
          <p className="text-zinc-600 mb-4">If you miss a dose, take it as soon as you remember. Do not double the dose to make up for a missed one.</p>
        </section>

        {/* Side Effects */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Respizeal™ Syrup is generally well-tolerated. However, in rare cases, mild side effects such as stomach upset, nausea, or allergic reactions (especially in individuals allergic to bee products) may occur. If you experience any severe reactions, discontinue use and consult a healthcare professional.
          </p>
        </section>

        {/* Storage Information */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store Respizeal Syrup?</h2>
          <p className="text-zinc-600">
            Store below 30°C, away from direct sunlight and moisture. Keep out of reach of children. Do not use after the expiry date printed on the label or carton.
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