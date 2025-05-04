import Image from 'next/image';
import { Card } from '@/components/ui/card';
import {
  Recycle,
  Truck,
  ClipboardList,
  Calendar,
  Home,
  Loader,
  Headphones,
  Pill,
  Stethoscope,
  DollarSign
} from 'lucide-react';

const services = [
  { icon: Pill, title: 'Medication Dispensing', description: 'Stereda Pharmacy ensures that all your prescription needs are met with the highest level of professionalism. We dispense both over-the-counter and prescription medications, with a focus on accuracy and patient safety. Our pharmacists are available to provide guidance on the correct usage of your medications, helping you manage your health effectively.' },
  { icon: Stethoscope, title: 'Monitoring & Testing', description: 'We offer a variety of health monitoring and diagnostic testing services to help you stay on top of your health. Our professionally trained and certified pharmacists use state-of-the-art tools to perform tests such as blood pressure monitoring, blood glucose testing, malaria testing, and more, providing you with the information you need to make informed decisions about your health.' },
  { icon: ClipboardList, title: 'Counselling & Consultancy', description: 'Your health and well-being are our top priorities. At Stereda Pharmacy, we provide comprehensive pharmaceutical counseling and consultancy services. Our pharmacists are available to answer any questions you may have about your medications, including potential side effects and drug interactions.' },
  { icon: Truck, title: 'Dispensing & Delivery', description: 'For your convenience, Stereda Pharmacy offers both in-store dispensing and a home delivery service. Whether you prefer to pick up your prescriptions at one of our branches or have them delivered to your door, we ensure that you receive your medications promptly and safely.' },
  { icon: DollarSign, title: 'Cosmetics & Jewelry', description: 'In addition to our pharmaceutical services, Stereda Pharmacy also offers a curated selection of cosmetics and jewelry. Our cosmetic products are chosen for their quality and effectiveness, helping you look and feel your best.' },
  { icon: Loader, title: 'Manufacturing', description: 'Stereda Pharmacy is not just a retail pharmacy; we are also a manufacturing company. We have developed and launched two key products on the market: Sterevite Syrup and Steremed Syrup, designed to boost overall health and support brain function.' },
  { icon: Headphones, title: 'Customer Support', description: 'At Stereda Pharmacy, we understand that each customer is unique. That’s why we offer personalized service and after-sales support to ensure that all your healthcare needs are met.' },
];

export default function ServicesPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-64 lg:h-96">
        <Image
          src="/assets/images/img12.jpg"
          alt="Our Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">Our Services</h1>
          <nav className="mt-2 text-sm lg:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>Services</span>
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <span className="text-sm text-[#80b949] uppercase tracking-wide">Featured Services</span>
          <h2 className="mt-2 text-md tracking-wide">
            At Stereda Pharmacy, we pride ourselves on offering a wide range of professional healthcare services designed to meet the diverse needs of our clients. From medication dispensing to personalized counseling, our goal is to support your health journey with the utmost care and expertise. Here’s what we offer:
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <Card key={idx} className="flex flex-col p-6 hover:shadow-lg transition-shadow">
              <svc.icon className="h-8 w-8 text-[#80b949] mb-4" />
              <h3 className="text-lg font-medium mb-2 tracking-wide">{svc.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{svc.description}</p>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
