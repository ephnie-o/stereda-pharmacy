import Image from 'next/image'
import Link from 'next/link'
import sterevite from '@public/assets/images/sterevite.jpg'
import steremed from '@public/assets/images/steremed.jpg'
import sterecol from '@public/assets/images/sterecol.jpeg'
import whitebandage2 from '@public/assets/images/whitebandage2".jpeg'
import whitebandage4 from '@public/assets/images/whitebandage4".jpeg'
import whitebandage6 from '@public/assets/images/whitebandage6".jpeg'
import brownbandage2 from '@public/assets/images/brownbandage2".jpeg'
import brownbandage4 from '@public/assets/images/brownbandage4".jpeg'
import brownbandage6 from '@public/assets/images/brownbandage6".jpeg'
import steredexchesty from '@public/assets/images/steredexchesty.jpeg'
import steredexls from '@public/assets/images/steredexls.jpeg'
import steredexsupp from '@public/assets/images/steredexsupp.jpeg'
import MaxB2 from '@public/assets/images/MaxB2.jpeg'
import MaxB12Gummies from '@public/assets/images/MaxB12Gummies.jpeg'
import Respizeal2 from '@public/assets/images/Respizeal2.jpeg'
import Zeoxon2 from '@public/assets/images/Zeoxon2.jpeg'
import stereel from '@public/assets/images/steree-l.jpeg'
import stepac from '@public/assets/images/stepac.jpeg'
import magalin from '@public/assets/images/magalin.jpeg'
import Animation from '@components/Animations'


export default function ProductsPage() {
    // Array of products
    const products = [
        {
            image: sterevite,
            title: 'STEREVITE SYRUP',
            description: 'Sterevite Syrup is a multivitamin supplement designed to enhance overall health by providing essential vitamins and minerals. It supports recovery from illness, boosts energy levels, and is easy to consume, especially for those with difficulty swallowing pills. Sterevite is ideal for individuals with nutritional deficiencies, those recovering from illness, and anyone seeking to maintain optimal health. It is produced with high-quality standards, making it a trusted choice for maintaining vitality.',
            href: '/products/sterevite',
            animation: 'animate-from-left',
        },
        {
            image: steremed,
            title: 'STEREMED SYRUP',
            description: 'Steremed Syrup is a supplement containing L-carnosine and DHA, formulated to support brain health and provide antioxidant protection. L-carnosine helps protect cells from oxidative stress, while DHA is essential for cognitive function. Steremed is easy to take in syrup form, making it ideal for those seeking to enhance brain health and overall well-being.',
            href: '/products/steremed',
            animation: 'animate-from-right',
        },
        {
            image: steredexchesty,
            title: 'STEREDEX CHESTY COUGH SYRUP',
            description: 'Steredex Chesty Cough Syrup is a therapeutic formula containing Terbutaline, Bromhexine, Guaifenesin, and Menthol, designed to relieve chesty coughs and improve respiratory comfort. Terbutaline opens up the airways, Bromhexine and Guaifenesin work together to loosen mucus and clear congestion, while Menthol soothes throat irritation. Steredex is easy to take in syrup form, making it an effective solution for managing coughs and promoting easier breathing.',
            href: '/products/steredex-chesty-cough',
            animation: 'animate-from-left',
        },
        {
            image: steredexls,
            title: 'STEREDEX LS COUGH SYRUP',
            description: 'Steredex LS Expectorant is a powerful combination of ingredients formulated to treat chesty coughs by loosening and thinning mucus, making it easier to expel. It contains Levosalbutamol, Ambroxol, and Guaifenesin, which work together to clear the airways, reduce congestion, and improve breathing. This syrup is a reliable choice for those looking to manage respiratory discomfort and achieve effective relief from chest congestion.',
            href: '/products/steredex-ls-expectorant',
            animation: 'animate-from-right',
        },
        {
            image: steredexsupp,
            title: 'STEREDEX COUGH SUPPRESSANT SYRUP',
            description: 'Steredex Cough Suppressant is a carefully formulated syrup designed to provide relief from dry, persistent coughs. It works by suppressing the cough reflex, allowing you to rest and recover. Infused with soothing agents, it helps calm throat irritation while offering effective relief from cough-related discomfort. Steredex Cough Suppressant is easy to take and ideal for those seeking quick and lasting relief from unproductive coughs.',
            href: '/products/steredex-cough-suppressant',
            animation: 'animate-from-left',
        },
        {
            image: sterecol,
            title: 'STERECOL GUMMIES',
            description: 'Sterecol Night Gummies are a delicious sleep aid formulated with melatonin to support a healthy sleep cycle, along with ashwagandha and lemon balm to promote relaxation and reduce stress. These gummies help you unwind naturally, making it easier to fall asleep and wake up refreshed, without forming habits or causing drowsiness the next day.',
            href: '/products/sterecol',
            animation: 'animate-from-right',
        },
        {
            image: Respizeal2,
            title: 'RESPIZEAL SYRUP',
            description: "Respizeal Syrup is a soothing herbal remedy formulated with ivy leaf extract and propolis extract to naturally relieve sore throat, cough, and congestion. This gentle, plant-based syrup supports healthy respiratory function while helping to clear mucus and ease breathing. Enriched with nature’s powerful extracts, Respizeal provides effective comfort for both adults and children—without drowsiness or harsh chemicals. Your trusted herbal support for clear airways and calm relief, powered by Mother Nature’s goodness.",
            href: '/products/respizeal',
            animation: 'animate-from-left',
        },
        {
            image: Zeoxon2,
            title: 'ZEOXON CZ EFFERVESCENT TABLET',
            description: 'Zeoxon CZ Effervescent Tablets are a refreshing and effective way to strengthen your body’s natural defenses. Formulated with Vitamin C, Vitamin D3, and Zinc, this powerful trio supports immune health, enhances energy, and helps protect against daily stress and fatigue. Each sugar-free tablet dissolves quickly in water to create a delicious, fizzy drink packed with essential nutrients that keep you feeling strong and resilient every day. Your go-to immunity partner for a healthier, more energized you—crafted by Nutrileague, the preventive nutrition expert.',
            href: '/products/zeoxon-CZ',
            animation: 'animate-from-right',
        },
        {
            image: MaxB12Gummies,
            title: 'MAX B12 GUMMIES',
            description: 'Sterecol Night Gummies are a delicious sleep aid formulated with melatonin to support a healthy sleep cycle, along with ashwagandha and lemon balm to promote relaxation and reduce stress. These gummies help you unwind naturally, making it easier to fall asleep and wake up refreshed, without forming habits or causing drowsiness the next day.',
            href: '/products/max-B12-gummies',
            animation: 'animate-from-left',
        },
        {
            image: MaxB2,
            title: 'MAX-B TABLET',
            description: 'Max-B Tablets deliver a balanced blend of essential B-vitamins that work together to support proper nerve function, energy metabolism, and muscle performance. This powerful formula helps convert food into energy, reduces tiredness and fatigue, and promotes healthy skin, hair, and red blood cell formation. Ideal for busy lifestyles and those needing extra nutritional support, Max-B provides the foundation for lasting vitality and overall well-being. Stay energized, focused, and strong—Max-B, your daily boost for healthy nerves and muscles.',
            href: '/products/max-B',
            animation: 'animate-from-right',
        },
        {
            image: stereel,
            title: 'STEREE-L SYRUP',
            description: 'Steree-L Syrup is an effective antihistamine and anti-allergic formulation that provides relief from symptoms of allergies such as sneezing, runny or itchy nose, watery eyes, and cough caused by allergic reactions. The combination of Levocetirizine Dihydrochloride and Montelukast Sodium works synergistically to reduce inflammation, ease breathing, and prevent recurrent allergic episodes. Gentle and suitable for pediatric use, Steree-L helps manage conditions like allergic rhinitis, seasonal allergies, and mild asthma, promoting clear airways and comfortable breathing without causing drowsiness. Your trusted solution for allergy relief, better breathing, and uninterrupted comfort — day or night.',
            href: '/products/steree-l',
            animation: 'animate-from-left',
        },
        {
            image: stepac,
            title: 'STEPAC TABLETS',
            description: 'Stepac Tablets provide fast and effective relief from pain and inflammation caused by various conditions such as headache, muscle pain, joint pain, backache, dental pain, and menstrual cramps. Formulated with a powerful combination of Aceclofenac and Paracetamol, Stepac helps reduce pain, swelling, and fever while improving overall mobility and comfort. Aceclofenac acts as an anti-inflammatory and pain-relieving agent, while Paracetamol helps lower fever and enhance pain relief, making Stepac an all-round solution for both acute and chronic pain. Gentle on the stomach and effective throughout the day, Stepac is your trusted choice for comprehensive pain relief and improved quality of life.',
            href: '/products/stepac',
            animation: 'animate-from-right',
        },
        {
            image: magalin,
            title: 'MAGALIN CAPSULES',
            description: 'Magalin Capsules combine the power of Pregabalin and Methylcobalamin to provide effective relief from neuropathic pain and nerve-related discomfort. This advanced formulation helps repair and protect damaged nerves while reducing sensations such as burning, tingling, and numbness caused by conditions like diabetes, nerve injuries, or sciatica. Pregabalin works by calming overactive nerve signals to reduce pain perception, while Methylcobalamin (Vitamin B12) nourishes and regenerates nerve tissues, restoring proper nerve function. Together, they help improve sleep quality, reduce nerve pain, and enhance overall comfort and mobility. Gentle on the stomach and suitable for long-term use under medical supervision, Magalin offers comprehensive nerve support for lasting pain relief and improved nerve health.',
            href: '/products/magalin',
            animation: 'animate-from-left',
        },
        {
            image: whitebandage2,
            title: 'WHITE HIGH ELASTIC BANDAGE 2-INCHES',
            description: 'A versatile 2-inch white elastic bandage designed for secure compression and support, ideal for wrapping injuries, sprains, and strains. Durable, breathable, and easy to apply, it provides comfortable and effective stabilization for joints and muscles.',
            href: '/products/bandages',
            animation: 'animate-from-right',
        },
        { image: whitebandage4,
            title: 'WHITE HIGH ELASTIC BANDAGE 4-INCHES',
            description: 'A 4-inch white elastic bandage offering reliable compression and support for larger areas like knees, elbows, and ankles. Ideal for managing injuries, sprains, or swelling, it provides a secure, comfortable fit while allowing flexibility and breathability.',
            href:'/products/bandages',
            animation: 'animate-from-left',
        },
        {
            image: whitebandage6,
            title: 'WHITE HIGH ELASTIC BANDAGE 6-INCHES',
            description: 'A 6-inch white elastic bandage designed for effective compression and support of larger areas, such as the thigh, chest, or shoulder. Ideal for managing significant injuries, sprains, or post-surgical care, it ensures a secure, comfortable fit with excellent flexibility and breathability.',
            href:'/products/bandages',
            animation: 'animate-from-right',
        },
        {
            image: brownbandage2,
            title: 'BROWN HIGH ELASTIC BANDAGE 2-INCHES',
            description: 'A 2-inch brown elastic bandage designed for secure compression and support of small areas like wrists and ankles. Perfect for treating minor injuries, sprains, or strains, it offers a comfortable fit with a discreet appearance, flexibility, and breathability.',
            href:'/products/bandages',
            animation: 'animate-from-left',
        },
        {
            image: brownbandage4,
            title: 'BROWN HIGH ELASTIC BANDAGE 4-INCHES',
            description: 'A 4-inch brown elastic bandage ideal for providing compression and support to medium-sized areas like knees, calves, or elbows. It effectively helps manage injuries, sprains, or swelling while offering a comfortable, flexible fit with a discreet, natural look.',
            href:'/products/bandages',
            animation: 'animate-from-right',
        },
        {
            image: brownbandage6,
            title: 'BROWN HIGH ELASTIC BANDAGE 6-INCHES',
            description: 'A 6-inch brown elastic bandage designed for robust compression and support of larger areas like thighs, chest, or shoulders. Ideal for managing more extensive injuries, sprains, or post-surgical recovery, it offers a secure, flexible fit with a natural appearance and breathable comfort.',
            href:'/products/bandages',
            animation: 'animate-from-left',
        },
        {
            image: steredexchesty,
            title: 'STEREDEX',
            description: 'Steredex - Relieves All Types of Coughs',
            href:'/products/steredex',
            animation: 'animate-from-right',
        },
    ];

    return (
        <div className="bg-gray-100 py-8">
            <section className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-zinc-700 mb-8">Our Products</h1>
                {products.map((product, index) => (
                    <Animation key={index} animationClass={product.animation}>
                        <div className={`flex flex-col md:flex-row mt-12`}>
                            <div className="relative h-96 w-full md:w-1/2 max-w-md mx-auto overflow-hidden rounded-lg">
                                <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                />
                            </div>
                            <div className="md:ml-8 mt-4 md:mt-0 md:w-1/2">
                                <h2 className="text-2xl font-bold text-zinc-600">{product.title}</h2>
                                <p className="mt-2 text-zinc-600">{product.description}</p>
                                <Link href={product.href} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-full">
                                    Learn more...
                                </Link>
                            </div>
                        </div>
                    </Animation>
                ))}
            </section>
        </div>
    );
  }
