'use client'

export default function Scroll({ refs }) {

    const scrollToSection = (ref) => {
        const offset = 50; // Adjust this value based on your navbar height
        const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="bg-white shadow-md py-4 px-4 flex flex-col space-y-2">
            <button onClick={() => scrollToSection(refs.compositionRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition">Composition</button>
            <button onClick={() => scrollToSection(refs.usageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Usage</button>
            <button onClick={() => scrollToSection(refs.precautionsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Precautions</button>
            <button onClick={() => scrollToSection(refs.dosageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Dosage</button>
            <button onClick={() => scrollToSection(refs.sideEffectsRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Side Effects</button>
            <button onClick={() => scrollToSection(refs.storageRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Storage</button>
            <button onClick={() => scrollToSection(refs.infoRef)} className="bg-green-700 text-white py-2 px-4 rounded text-left hover:bg-green-600 transition mb-2">Further Info</button>
        </nav>
    );
}