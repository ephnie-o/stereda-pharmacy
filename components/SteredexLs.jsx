'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import steredexls from '@public/assets/images/steredexls.jpeg';

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
              src={steredexls}
              alt="Steredex LS Expectorant"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Steredex LS Expectorant</h1>
            <p className="text-lg text-zinc-600">Expectorant for Managing Chesty Coughs and Congestion</p>
          </div>
        </div>

        {/* Composition Section */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each Serving 5 ml Contains:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Ambroxol Hydrochloride BP - 30mg</li>
            <li>Levosalbutamol Sulphate - 1mg</li>
            <li>Guaphenesin BP - 50mg</li>
            <li>Flavoured Syrup Base - Q.S.</li>
            <li>Colour: Tartazine and Brilliant Blue FCF</li>
          </ul>
        </section>

        {/* Usage Information */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Steredex LS Expectorant and What is it Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Steredex LS Expectorant is designed to relieve chesty coughs by loosening mucus, clearing congestion, and improving airflow. It is ideal for respiratory conditions involving excessive mucus.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li className="mb-3">
              <strong>Levosalbutamol:</strong> Relaxes airway muscles to ease breathing and improve airflow.
            </li>
            <li className="mb-3">
              <strong>Guaifenesin:</strong> An expectorant that aids in clearing mucus from the airways for effective relief from congestion.
            </li>
            <li className="mb-3">
              <strong>Ambroxol:</strong> A mucolytic agent that thins and loosens mucus, facilitating its expulsion.
            </li>
            <li className="mb-3">
                <strong>Flavoured Syrup Base:</strong> Ensures the medicine is pleasant to consume, encouraging adherence to the prescribed dosage.
            </li>
          </ul>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">Do not take Steredex LS Expectorant if you are allergic to any of its active ingredients. Consult your healthcare professional before taking this syrup if you:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are pregnant or breastfeeding.</li>
            <li>Have asthma or other chronic respiratory diseases.</li>
            <li>Have kidney or liver problems.</li>
            <li>Are taking other cough or cold medications.</li>
          </ul>
          <p className="text-zinc-600 mt-4">Other cough syrups and STEREDEX LS EXPECTORANT. Tell your Healthcare Professional if you are taking, have recently taken, or might take any other medicines, or including medicine obtained without prescription.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">STEREDEX LS EXPECTORANT with food and drink</h2>
          <p className="text-zinc-600 mb-4">You should take the syrup at mealtimes. This is to help lower the chances of side effects that affect the area in and around the stomach (the gastrointestinal area).</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">Pregnancy and breast – feeding</h2>
          <p className="text-zinc-600 mb-4">If you are pregnant or breastfeeding, think that you are pregnant, or are planning to have a baby, you should not take this syrup unless your healthcare professional decides it is necessary. Ask healthcare professional before taking the cough syrup.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">Driving and using Machines</h2>
          <p className="text-zinc-600 mb-4">This cough syrup should not affect your ability to drive or use machinery. However, if you think that you are affected, you should not drive or use machinery until you feel better.</p>
        </section>

        {/* Dosage Information */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Steredex LS Expectorant?</h2>
          <p className="text-zinc-600 mb-4">
            The usual dose for adults and children over 12 years is 10 - 20 ml every 6–8 hours as needed and for children 7 - 12 years, 5 - 10ml 3 times daily, or as directed by your healthcare professional. Do not exceed the recommended dosage.
          </p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">OVERDOSE</h2>
          <p className="text-zinc-600 mb-4">If you accidently swallow a lot of syrup at a time or suspect that a child may have swallowed any, do not worry, as this is unlikely to need special treatment. However, you should contact your healthcare professional for further advice.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">If you forget to take STEREDEX LS EXPECTORANT</h2>
          <p className="text-zinc-600 mb-4">If you miss a dose, do not take a double dose to make up for a forgotten dose, just resume your schedule and go on as before. If you are not sure what to do, ask your healthcare professional.</p>
        </section>

        {/* Side Effects */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Steredex LS Expectorant is likely safe. However, if you experience any side effects such as stomach upset, headache, nausea, or vomiting, stop taking the cough syrup and consult your healthcare professional immediately.
          </p>
        </section>

        {/* Storage Information */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store Steredex LS Expectorant?</h2>
          <p className="text-zinc-600">
            Keep Steredex LS Expectorant out of reach of children. Store at a temperature not exceeding 30°C. Do not use after the expiry date stated on the label or carton.
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