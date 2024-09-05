'use client';
import Image from 'next/image';
import Scroll from './Scroll';
import { useRef } from 'react';
import steremed from '@public/assets/images/steremed.jpg';

export default function Sterevite() {
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
              src={steremed}
              alt="Steremed Syrup"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Sterevite Syrup</h1>
            <p className="text-lg text-zinc-600">L-CARNOSINE WITH DHA SYRUP</p>
          </div>
        </div>

        {/* Composition Section */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each Serving 5 ml Contains:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>L-Carnosine - 100mg</li>
            <li>DHA ( Docosahexaenoic Acid ) - 70mg</li>
            <li>Flavoured Syrup base - q.s.</li>
          </ul>
        </section>

        {/* Usage Information */}
        <section ref={usageRef} className="mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">What is Steremed Syrup and What is it Used For?</h2>
            <p className="text-zinc-600 mb-4">
                STEREMED SYRUP contains L-Carnosine and DHA (Docosahexaenoic Acid).
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h3>
            <ul className="list-disc list-inside text-zinc-600">
                <li className="mb-3"><strong>L-Carnosine:</strong> L-Carnosine prevents cognitive decline by inhibiting amyloid-beta and enhances nervous system function in individuals with autism. It helps in reducing the build-up of amyloid-beta, a protein that forms the brain plaques associated with Alzheimer's. In individuals with autism, STEREMED helps in improving behaviour, socialization, communication, vocabulary and increases language comprehension. It helps prevent kidney and nerve damage in people with diabetes by protecting against damage caused by protein glycation. It is necessary for normal body functions such as proper functioning and development of the heart, muscles, brain, kidney, and other organs.</li>
                <li className="mb-3"><strong>Docosahexanoic acid:</strong>  Docosahexaenoic acid is a long-chain polyunsaturated fatty acid, is essential for normal brain development. DHA (Docosahexaenoic Acid) is essential for the growth and functional development of the brain in infants. The function of DHA in the brain is to help in the transmission of messages through nerve cells and to protect the brainagainst loss of scaffolding proteins and oxidative degradation of lipids, thus helping maintain the plasticity of the brain. DHA influence neurotransmitters in the brain, helping brain cells to communicate better with each other.</li>
            </ul>
            <h3 className="text-xl font-semibold text-zinc-700 mb-2">The Supplement is shown to be effective against these listed below:</h3>
            <ul className="list-disc list-inside text-zinc-600">
                <li className="mb-3">Management of Autism & learning Disorder</li>
                <li className="mb-3"> Helps in improving behaviour, socialization, communication, vocabulary and increases language comprehension</li>
                <li className="mb-3">Development of the brain in infants</li>
                <li className="mb-3">Contributes to improved memory function in older adults with mind memory complaints.</li>
                <li className="mb-3">Improve Brain Function</li>
                <li className="mb-3">Prevent ADHD ( Attention-deficit hyperactivity disorder )</li>
                <li className="mb-3">- Proper functioning and development of the heart, muscles, brain, kidney, and other organs.</li>
            </ul>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">Do not take STEREMED SYRUP if you are allergic to active substances of this supplement. Consult your healthcare professional before taking Steremed Syrup if you:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are due to have or recently had surgery.</li>
            <li>Have kidney problems.</li>
            <li>Have uncontrolled diabetes.</li>
            <li>Have liver problems.</li>
            <li>Had a recent trauma.</li>
          </ul>
          <p className="text-zinc-600 mt-4">Other supplements and STEREMED SYRUP Tell your Healthcare Professional if you are taking, have recently taken, or might take any other medicines, or including medicine obtained without prescription.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">STEREMED SYRUP with food and drink</h2>
          <p className="text-zinc-600 mb-4">You should take the syrup at mealtimes. This is to help lower the chances of side effects that affect the area in and around the stomach (the gastrointestinal area).</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">Pregnancy and breast – feeding</h2>
          <p className="text-zinc-600 mb-4">If you are pregnant or breastfeeding, think that you are pregnant, or are planning to have a baby, you should not take this supplement unless your healthcare professional decides it is necessary. Ask healthcare professional before taking the supplement.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">Driving and using Machines</h2>
          <p className="text-zinc-600 mb-4">This supplement should not affect your ability to drive or use machinery. However, if you think that you are affected, you should not drive or use machinery until you feel better.</p>
        </section>

        {/* Dosage Information */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Steremed Syrup?</h2>
          <p className="text-zinc-600 mb-4">
            The usual dose is 10 ml twice daily or as directed by a healthcare professional. Do not exceed the recommended dosage.
          </p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">OVERDOSE</h2>
          <p className="text-zinc-600 mb-4">If you accidently swallow a lot of syrup at a time or suspect that a child may have swallowed any, do not worry, as this is unlikely to need special treatment. However, you should contact your healthcare professional for further advice.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">If you forget to take STEREMED SYRUP</h2>
          <p className="text-zinc-600 mb-4">If you miss a dose, do not take a double dose to make up for a forgotten dose, just resume your schedule and go on as before. If you are not sure what to do, ask your healthcare professional.</p>
        </section>

        {/* Side Effects */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Steremed Syrup is likely safe. However, if you experience any side effects such as stomach upset, allergic reaction, nausea, or vomiting, stop taking the supplement and consult your healthcare professional immediately.
          </p>
        </section>

        {/* Storage Information */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store Steremed Syrup?</h2>
          <p className="text-zinc-600">
            Keep Steremed Syrup out of reach of children. Store at a temperature not exceeding 30°C. Do not use after the expiry date stated on the label or carton.
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