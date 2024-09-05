import Image from 'next/image'
import about from '@public/assets/images/about.jpeg'
import ceo1 from '@public/assets/images/ceo1.jpeg'
import ceo2 from '@public/assets/images/ceo2.jpeg'
import ceo3 from '@public/assets/images/ceo3.jpeg'
import ceo4 from '@public/assets/images/ceo4.jpg'
import ceo5 from '@public/assets/images/ceo5.jpg'
import ceo6 from '@public/assets/images/ceo6.jpg'
import Animation from '@components/Animations'

export const metadata = {
    title: 'About Stereda Pharmacy Ghana: Learn more about Stereda Pharmacy.',
    description: 'Learn more about Stereda Pharmacy, our vision, mission, values, and leadership. Providing top-quality healthcare services in Ghana.',
}

// Section component for repeated use
function Section({ title, children, className = '' }) {
    return (
        <section className={`py-8 ${className}`}>
            <div className="container mx-auto px-4">
                {title && <h2 className="text-3xl font-bold text-center text-green-700">{title}</h2>}
                {children}
            </div>
        </section>
    );
}

  // Card component for Vision, Mission, etc.
function Card({ title, description, animationClass }) {
    return (
        <Animation animationClass={animationClass}>
            <div className="bg-green-600 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-center text-red-600">{title}</h2>
                {description && <p className="mt-4 text-gray-100">{description}</p>}
            </div>
        </Animation>
    );
}


export default function About() {
    const ceoImages = [
        {src: ceo1, animation: 'animate-from-left'},
        {src: ceo2, animation: 'animate-from-right'},
        {src: ceo3, animation: 'animate-from-left'},
        {src: ceo4, animation: 'animate-from-right'},
        {src: ceo5, animation: 'animate-from-left'},
        {src: ceo6, animation: 'animate-from-right'},
    ];

    return (
        <div className="bg-gray-100">
            <Section>
                <Image src={about} alt="Stereda Pharmacy storefront" className="w-full rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                <h1 className="text-3xl font-bold text-zinc-700 mt-6 text-center">ABOUT US</h1>
                <p className="mt-4 text-md text-zinc-600">
                    Founded in 2008, Stereda Pharmacy has become a beacon of excellence in Ghana's pharmaceutical industry. With over a decade of dedicated service, we have grown from a single location to multiple branches across the country,including our prominent locations in Weija, Adade, Kasoa, and Afrikiko. Our journey has been one of unwavering commitment to providing high-quality healthcare services, ensuring that every Ghanaian has access to the best pharmaceutical care, no matter their location or financial situation.
                </p>
            </Section>

            <Section className="bg-white">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 p-4">
                        <Card
                            title="Our Vision"
                            description="To expand our reach with the best health service provision to our client nation-wide, backed by the zeal to help all persons live a heathier life."
                            animationClass="animate-from-left"
                        />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <Card
                            title="Our Mission"
                            description="To render a quality and trusted service to Ghanaians and the sub-region. To spearhead proper drug administration, health-care advice and products to the general public."
                            animationClass="animate-from-bottom"
                        />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <Card
                            title="Our Values"
                            description="We make it our mandate to provide you with the best pharmaceutical service, guided by the need to promote and facilitate your journey towards a healthy living."
                            animationClass="animate-from-right"
                        />
                    </div>
                </div>
            </Section>

            <Section title="Our Leadership" className="bg-gray-100">
                <div className="flex flex-wrap mt-6">
                    {ceoImages.map((src, index) => (
                        <div key={index}  className="w-full md:w-1/2 p-4">
                            <Animation animationClass={src.animation}>
                                <div className="relative h-96 overflow-hidden rounded-lg">
                                    <Image src={src.src} alt={`CEO image ${index + 1}`} fill style={{ objectFit: 'cover' }} className="rounded-lg" />
                                </div>
                            </Animation>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-zinc-600">
                    Our success is guided by the visionary leadership of our CEO, Mr. Stephen Kingsley Odoom. Under his stewardship, Stereda Pharmacy has not only expanded its reach but also earned recognition for its excellence. In 2023, Mr. Odoom was honored with several prestigious awards, including the Small Medium Enterprise of the Year Award by the Ghana CEO Awards, the Ghana Pharma Award, and the CEO of the Year by the Ghana - West Africa Healthcare Excellence Awards. These accolades are a testament to his dedication and the trust our clients place in us.
                </p>
            </Section>

            <Section className="bg-white text-zinc-600">
                <h2 className="text-2xl font-bold text-green-600 text-center">Our Commitment to You</h2>
                <p className="mt-4">
                    Stereda Pharmacy is more than just a place to get your prescriptions filled. We are a partner in your health journey, committed to ensuring that you receive the best possible care. Whether you visit us for a routine prescription, a health check-up, or expert advice, you can trust that you are in good hands.
                </p>
                <p  className="mt-4">
                    Thank you for choosing Stereda Pharmacy. We look forward to continuing to serve you with integrity, dedication, and the highest standards of pharmaceutical care.
                </p>
            </Section>
        </div>
    );
}