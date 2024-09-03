export const metadata = {
    title: 'Contact Us - Stereda Pharmacy: Get in touch with Stereda Pharmaceuticals Limited',
    description: 'Get in touch with Stereda Pharmaceuticals Limited for inquiries, appointments, or customer support. We are here to assist you with all your healthcare needs.',
}

export default function Contact() {
    const branches = [
        {
            name: 'WEIJA BRANCH',
            address: 'No. ANT 7/2 Aplaku Newtown Weija Accra, Opp. Petrosol Filling Station, Block Factory-Kasoa Rd',
            phone: '0302851906 / 0249009988',
            hours: 'Monday - Saturday: 7am - 10pm, Sunday: 8am - 10pm',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1228383305684!2d-0.3342439!3d5.5488007999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbd3e9ec18f2b%3A0x5e7b49c3311c081f!2sStereda%20Pharmaceuticals%20Limited!5e0!3m2!1sen!2sgh!4v1725041483308!5m2!1sen!2sgh',
        },
        {
            name: 'ADADE BRANCH',
            address: 'Adade Junction Opp. Nick Petroleum Filling Station, Nyanyano Road - Kasoa Kakraba',
            phone: '0302904755 / 0249009988',
            hours: 'Monday - Saturday: 7am - 10pm, Sunday: 7am - 10pm',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.3649993623135!2d-0.42028964598625707!3d5.50576416430082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfba4f1e4f42a7%3A0xe45f81107e92922d!2sStereda%20Pharmacy%20%26%20Mart!5e1!3m2!1sen!2sgh!4v1725041841749!5m2!1sen!2sgh',
        },
        {
            name: 'KASOA FIJAI BRANCH',
            address: 'Fijai Junction - Kasoa, Nyanyano Road',
            phone: '0302951044 / 0249009988',
            hours: 'Monday - Saturday: 7am - 9pm, Sunday: 7am - 9pm',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.6739074474085!2d-0.4162973!3d5.4932046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbb6758068455%3A0xdc32f40c02dbbaa4!2sStereda%20Pharmacy!5e1!3m2!1sen!2sgh!4v1725041898467!5m2!1sen!2sgh',
        },
        {
            name: 'AFRIKIKO BRANCH',
            address: 'Afrikiko, Liberation Road',
            phone: '0302952997 / 0249009988',
            hours: 'Monday - Saturday: 7am - 11pm, Sunday: 8am - 11pm',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.1441323867048!2d-0.18873199999999996!3d5.5757414999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bd4716603fb%3A0x3a5785c98610c3cb!2sStereda%20Pharmacy%20Ltd.!5e1!3m2!1sen!2sgh!4v1725041951891!5m2!1sen!2sgh',
        },
    ];

    return (
        <div className="bg-gray-100">
            <section className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-zinc-700 mb-6">We’re Here to Help</h1>
                <p className="text-zinc-600 mb-8">
                    Whether you have questions about our products, need assistance with your prescriptions, or want to provide feedback, we’re here to assist you. Reach out to us using any of the methods below.
                </p>
                <h2 className="text-2xl font-bold text-zinc-700 mb-4">Contact Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {branches.map((branch, index) => (
                        <div key={index} className="p-4 bg-green-700 text-gray-100 font-semibold rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">{branch.name}</h3>
                            <p>{branch.address}</p>
                            <p>Tel: {branch.phone}</p>
                            <p>Operating Hours: {branch.hours}</p>
                            <div className="mt-4">
                            <iframe
                                src={branch.mapUrl}
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-md"
                                title={`Map of ${branch.name}`}
                            ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}