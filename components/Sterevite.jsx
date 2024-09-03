'use client';
import Image from 'next/image';
import { useRef } from 'react';
import sterevite from '@public/assets/images/sterevite.jpg';

export default function Sterevite() {
  // Refs for sections
  const compositionRef = useRef(null);
  const usageRef = useRef(null);
  const precautionsRef = useRef(null);
  const dosageRef = useRef(null);
  const sideEffectsRef = useRef(null);
  const storageRef = useRef(null);
  const infoRef = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="container flex flex-col space-y-1">
          <button onClick={() => scrollToSection(compositionRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Composition</button>
          <button onClick={() => scrollToSection(usageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Usage</button>
          <button onClick={() => scrollToSection(precautionsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Precautions</button>
          <button onClick={() => scrollToSection(dosageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Dosage</button>
          <button onClick={() => scrollToSection(sideEffectsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Side Effects</button>
          <button onClick={() => scrollToSection(storageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Storage</button>
          <button onClick={() => scrollToSection(infoRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Further Info</button>
        </div>
      </nav>

      <div className="container mx-auto px-4">
        {/* Product Image and Title */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={sterevite}
              alt="Sterevite Syrup"
              width={300}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Sterevite Syrup</h1>
            <p className="text-lg text-zinc-600">Multivitamin Syrup for Children</p>
          </div>
        </div>

        {/* Composition Section */}
        <section ref={compositionRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Composition</h2>
          <p className="text-zinc-600 mb-2">Each Serving 5 ml Contains:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Vitamin A (as Palmitate) - 375 IU</li>
            <li>Vitamin D (Cholecalciferol) - 300 IU</li>
            <li>Vitamin B1 (Thiamine Hydrochloride) - 0.75 mg</li>
            <li>Vitamin B2 (Riboflavin Sodium Phosphate) - 0.75 mg</li>
            <li>Vitamin B3 (Nicotinamide) - 3 mg</li>
            <li>Vitamin B5 (D-Panthenol) - 1.25 mg</li>
            <li>Vitamin B6 (Pyridoxine Hydrochloride) - 0.5 mg</li>
            <li>Vitamin B12 (Cyanocobalamin) - 0.5 mcg</li>
            <li>Excipients - q.s.</li>
          </ul>
        </section>

        {/* Usage Information */}
        <section ref={usageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Sterevite Syrup and What is it Used For?</h2>
          <p className="text-zinc-600 mb-4">
            Sterevite Syrup contains essential vitamins such as Vitamin A, D, B1, B2, B3, B5, B6, and B12, which support normal growth and development in children, enhance immune function, promote healthy bones, and maintain overall health.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside text-zinc-600">
            <li className="mb-3"><strong>Vitamin A:</strong> Vitamin A Supports normal growth and development in children. Vitamin A also Support vision and eye functions. Vitamin A helps to support the immune system by promoting the production of white blood cells, which are responsible for fighting off infections. Vitamin A is necessary for the growth of the central nervous system and aids in the promotion of the development of the bones, teeth, and soft tissues. Vitamin A is also essential for brain health, It helps to support the development of the central nervous system and plays a crucial role in cognitive function.</li>
            <li className="mb-3"><strong>Vitamin D3:</strong> Vitamin D3 helps your child build strong bones and prevent rickets. Rickets is a condition of softening of the bones that can occur in growing children. Vitamin D3 works like a hormone in the body that regulates cellular function, helps in building immunity.</li>
            <li className="mb-3"><strong>Vitamin B1:</strong> Vitamin B1 helps promote the growth and strengthening of kids nerves and muscles. It also helps the body convert carbohydrates into energy. Vitamin B1 protects the nervous system from any kind of damage or degeneration.</li>
            <li className="mb-3"><strong>Vitamin B2:</strong> Vitamin B2 promotes the production of healthy red blood cells in the body. Vitamin B2 helps in migraine.</li>
            <li className="mb-3"><strong>Vitamin B3:</strong> Vitamin B3 helps convert carbohydrates, proteins, and fats from the food into usable energy. Vitamin B3 is essential for maintaining a healthy nervous system. It aids in the synthesis of neurotransmitters, which are vital for proper brain function. Vitamin B3 aids in the proper functioning of the digestive system. It plays a role in producing digestive enzymes that help break down food and promote efficient nutrient absorption.</li>
            <li className="mb-3"><strong>Vitamin B5:</strong> Vitamin B5 (D-Panthenol) B5 is a component in the synthesis of a chemical compound known as coenzyme A (CoA), which helps support several metabolic functions, including the build-up of healthy fats in the body and breakdown of fatty acids. Vitamin B5 also gives volume and shine to the hair by improving the texture and durability of hair follicles.</li>
            <li className="mb-3"><strong>Vitamin B6:</strong> Vitamin B6 is necessary for red blood cell formation. It produces haemoglobin, which transports oxygen in the red blood cells to the body’s tissues. Vitamin B6 helps maintain normal blood sugar (glucose) levels in the body. It supports the healthy functioning of the immune system.</li>
            <li className="mb-3"><strong>Vitamin B12:</strong> Vitamin B12 is important for central nervous system function, forming red blood cells and turning the food that you eat into energy. Vitamin B12 use to form DNA and RNA so that body make new cells and grow, and for the normal function of the immune system.</li>
          </ul>
        </section>

        {/* Precautions Section */}
        <section ref={precautionsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
          <p className="text-zinc-600 mb-4">Do not take Sterevite Syrup if you are allergic to any of its active substances. Consult your healthcare professional before taking Sterevite Syrup if you:</p>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Are due to have or recently had surgery.</li>
            <li>Have kidney problems.</li>
            <li>Have uncontrolled diabetes.</li>
            <li>Have liver problems.</li>
            <li>Had a recent trauma.</li>
          </ul>
          <p className="text-zinc-600 mt-4">Other supplements and STEREVITE SYRUP Tell your Healthcare Professional if you are taking, have recently taken, or might take any other medicines, or including medicine obtained without prescription.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">STEREVITE SYRUP with food and drink</h2>
          <p className="text-zinc-600 mb-4">You should take the syrup at mealtimes. This is to help lower the chances of side effects that affect the area in and around the stomach (the gastrointestinal area).</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">Pregnancy and breast – feeding</h2>
          <p className="text-zinc-600 mb-4">If you are pregnant or breastfeeding, think that you are pregnant, or are planning to have a baby, you should not take this supplement unless your healthcare professional decides it is necessary. Ask healthcare professional before taking the supplement.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">Driving and using Machines</h2>
          <p className="text-zinc-600 mb-4">This supplement should not affect your ability to drive or use machinery. However, if you think that you are affected, you should not drive or use machinery until you feel better.</p>
        </section>

        {/* Dosage Information */}
        <section ref={dosageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Take Sterevite Syrup?</h2>
          <p className="text-zinc-600 mb-4">
            The usual dose is 10 ml twice daily or as directed by a healthcare professional. Do not exceed the recommended dosage.
          </p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">OVERDOSE</h2>
          <p className="text-zinc-600 mb-4">If you accidently swallow a lot of syrup at a time or suspect that a child may have swallowed any, do not worry, as this is unlikely to need special treatment. However, you should contact your healthcare professional for further advice.</p>
          <h2 className="text-xl font-semibold text-zinc-700 my-4">If you forget to take STEREVITE SYRUP</h2>
          <p className="text-zinc-600 mb-4">If you miss a dose, do not take a double dose to make up for a forgotten dose, just resume your schedule and go on as before. If you are not sure what to do, ask your healthcare professional.</p>
        </section>

        {/* Side Effects */}
        <section ref={sideEffectsRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Possible Side Effects</h2>
          <p className="text-zinc-600">
            Sterevite Syrup is likely safe. However, if you experience any side effects such as stomach upset, headache, nausea, or vomiting, stop taking the supplement and consult your healthcare professional immediately.
          </p>
        </section>

        {/* Storage Information */}
        <section ref={storageRef} className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store Sterevite Syrup?</h2>
          <p className="text-zinc-600">
            Keep Sterevite Syrup out of reach of children. Store at a temperature not exceeding 30°C. Do not use after the expiry date stated on the label or carton.
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