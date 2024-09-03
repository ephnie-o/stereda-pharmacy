import { forwardRef } from 'react'
import clsx from 'clsx'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
    title: 'Our Services - Stereda Pharmacy: Explore the wide range of professional healthcare services.',
    description: 'Explore the wide range of professional healthcare services offered by Stereda Pharmaceuticals Limited, including medication dispensing, personalized counseling, and more to support your health journey with the utmost care and expertise.',
}

const services = [
    {
        title: 'Medication Dispensing',
        description: 'Stereda Pharmacy ensures that all your prescription needs are met with the highest level of professionalism. We dispense both over-the-counter and prescription medications, with a focus on accuracy and patient safety. Our pharmacists are available to provide guidance on the correct usage of your medications, helping you manage your health effectively.',
    },
    {
        title: 'Monitoring & Testing',
        description: 'We offer a variety of health monitoring and diagnostic testing services to help you stay on top of your health. Our professionally trained and certified pharmacists use state-of-the-art tools to perform tests such as blood pressure monitoring, blood glucose testing, malaria testing, and more, providing you with the information you need to make informed decisions about your health.',
    },
    {
        title: 'Counselling & Consultancy',
        description: 'Your health and well-being are our top priorities. At Stereda Pharmacy, we provide comprehensive pharmaceutical counseling and consultancy services. Our pharmacists are available to answer any questions you may have about your medications, including potential side effects and drug interactions.',
    },
    {
        title: 'Dispensing & Delivery',
        description: 'For your convenience, Stereda Pharmacy offers both in-store dispensing and a home delivery service. Whether you prefer to pick up your prescriptions at one of our branches or have them delivered to your door, we ensure that you receive your medications promptly and safely.',
    },
    {
        title: 'Cosmetics & Jewelry',
        description: 'In addition to our pharmaceutical services, Stereda Pharmacy also offers a curated selection of cosmetics and jewelry. Our cosmetic products are chosen for their quality and effectiveness, helping you look and feel your best.',
    },
    {
        title: 'Manufacturing',
        description: 'Stereda Pharmacy is not just a retail pharmacy; we are also a manufacturing company. We have developed and launched two key products on the market: Sterevite Syrup and Steremed Syrup, designed to boost overall health and support brain function.',
    },
    {
        title: 'Customer Support',
        description: 'At Stereda Pharmacy, we understand that each customer is unique. That’s why we offer personalized service and after-sales support to ensure that all your healthcare needs are met.',
    },
    {
        title: 'How to Access Our Services',
        description: 'We have multiple branches across Ghana, including locations in Weija, Adade, Kasoa, and Afrikiko, to make our services easily accessible to you. You can also take advantage of our online services, such as prescription refills and virtual consultations, from the comfort of your home.',
    },
]

function Card({ as, className, children }) {
    let Component = as ?? 'div'

    return (
      <Component
        className={clsx(className)}
      >
        {children}
      </Component>
    )
}

Card.Title = function CardTitle({ children }) {
    return (
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
        {children}
      </h2>
    )
}

Card.Description = function CardDescription({ children }) {
    return (
      <p className="mt-2 mb-10 text-sm text-zinc-500">
        {children}
      </p>
    )
}




export default function Services() {
    return (
        <div>
                <SimpleLayout
                    title="Our Services"
                    intro="At Stereda Pharmacy, we pride ourselves on offering a wide range of professional healthcare services designed to meet the diverse needs of our clients. From medication dispensing to personalized counseling, our goal is to support your health journey with the utmost care and expertise. Here’s what we offer:"
                >
                    <div>
                        {services.map((service) =>(
                            <Card className="grid md:grid-cols-[1fr_4fr]" key={service.title}>
                                <Card.Title className="md:pr-4">{service.title}</Card.Title>
                                <Card.Description className="md:pl-4">{service.description}</Card.Description>
                            </Card>
                        ))}
                    </div>
                </SimpleLayout>
        </div>
    )
}