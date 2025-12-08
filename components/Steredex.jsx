import steredexchesty from '@public/assets/images/steredexchesty.jpeg'
import steredexls from '@public/assets/images/steredexls.jpeg'
import steredexsupp from '@public/assets/images/steredexsupp.jpeg'
import Animation from '@components/Animations'
import Image from 'next/image'
import Link from 'next/link'

const Steredex = () => {

    const products = [
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
        }
    ];

    return (
        <div className="bg-gray-100 py-8">
            <section className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-zinc-700 mb-8">Steredex Cough Syrups</h1>
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
    )
}

export default Steredex