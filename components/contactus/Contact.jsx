// app/contact/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

// Branch coordinates
const locations = [
    { lat: 5.5488008, lng: -0.3342439, title: 'Stereda Pharmaceuticals Limited Weija' },      // Stereda Pharmaceuticals Limited
    { lat: 5.50576416, lng: -0.42028965, title: 'Stereda Pharmacy & Mart Kasoa Adade' },    // Stereda Pharmacy & Mart
    { lat: 5.4932046,  lng: -0.4162973,  title: 'Stereda Pharmacy Kasoa Fijai' },     // Stereda Pharmacy
    { lat: 5.5757415,  lng: -0.188732,   title: 'Stereda Pharmacy Ltd. Afrikiko' },      // Stereda Pharmacy Ltd.
  ];

export default function ContactPage() {
    const [mapInitialized, setMapInitialized] = useState(false);

    useEffect(() => {
        if (!mapInitialized) return;
        const mapEl = document.getElementById('map');
        if (!mapEl) return;
    
        const map = new google.maps.Map(mapEl, {
          center: { lat: 5.53, lng: -0.34 },
          zoom: 11,
        });
    
        locations.forEach(({ lat, lng, title }) => {
          const marker = new google.maps.Marker({ position: { lat, lng }, map, title, });
        
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding:8px;max-width:200px;">
                <strong>${title}</strong><br/>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" 
                  target="_blank" 
                  style="color:#80b949;text-decoration:none;font-weight:bold;"
                >
                  Get Directions
                </a>
              </div>
            `,
          });
    
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
      }, [mapInitialized]);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-64 lg:h-96">
        <Image
          src="/assets/images/herobg.png"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-sm lg:text-base">We’re here to help and answer any question you might have.</p>
          <nav className="mt-2 text-xs lg:text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Form & Newsletter */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-12">
        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="email" placeholder="Email" className='rounded-full' />
            <Input type="tel" placeholder="Phone" className='rounded-full' />
          </div>
          <Input type="text" placeholder="Name" className='rounded-full' />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-3 focus:ring-gray-300"
          />
          <Button type="submit" className="bg-[#80b949] hover:bg-[#5b8432] text-white">
            Submit
          </Button>
        </form>

        {/* Newsletter Card */}
        <div className="relative rounded-lg p-6 max-w-sm lg:mx-0" style={{ backgroundImage: "url('/assets/images/ceo2.jpeg')", backgroundSize: "cover", backgroundPosition: "center", height: '200px' }}>
        <div className='absolute inset-0 bg-black/70 rounded-lg'>
        <div className='relative z-10 p-3'>
            <h3 className="text-lg font-semibold mb-2 text-white">Our Newsletter</h3>
            <p className="text-sm text-gray-200 mb-4">
                Get the latest updates and offers delivered to your inbox.
            </p>
            <form action="/thank-you">
              <div className="flex space-x-2">
                  <Input
                  type="email"
                  placeholder="Your email"
                  className='rounded-full bg-white'
                  />
                  <Button className="bg-[#80b949] hover:bg-[#5b8432] text-white">
                  Subscribe
                  </Button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Phone */}
        <div className="flex flex-col items-center bg-[#96b577] p-6 rounded-lg text-center">
          <Phone className="h-8 w-8 text-gray-100 mb-2" />
          <h4 className="font-semibold text-gray-100">+233 24 900 9988</h4>
          <p className="text-sm text-gray-100">Call us anytime</p>
        </div>
        {/* Email */}
        <div className="flex flex-col items-center bg-[#dae8cc] p-6 rounded-lg text-center hover:text-gray-600">
          <Mail className="h-8 w-8 text-[#80b949] mb-2" />
          <Link href="mailto:steredapharmaceuticals@gmail.com">
          <h4 className="font-semibold">steredapharmaceuticals@gmail.com</h4>
          <p className="text-sm text-gray-600">Email us your query</p>
          </Link>
          
        </div>
        {/* Address 1 */}
        <div className="flex flex-col items-center bg-gray-100  p-6 rounded-lg shadow-sm text-center">
          <MapPin className="h-8 w-8 text-[#80b949] mb-2" />
          <h4 className="font-semibold">Adade Branch</h4>
          <p className="text-sm text-gray-600">Adade, Kasoa, Ghana</p>
        </div>
        {/* Address 2 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-sm text-center">
          <MapPin className="h-8 w-8 text-[#80b949] mb-2" />
          <h4 className="font-semibold">Weija Branch</h4>
          <p className="text-sm text-gray-600">Weija, Accra, Ghana</p>
        </div>
        {/* More branches */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-sm text-center lg:flex">
          <MapPin className="h-8 w-8 text-[#80b949] mb-2" />
          <h4 className="font-semibold">Afrikiko Branch</h4>
          <p className="text-sm text-gray-600">Afrikiko, Accra, Ghana</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-sm text-center lg:flex">
          <MapPin className="h-8 w-8 text-[#80b949] mb-2" />
          <h4 className="font-semibold">Fijai Branch</h4>
          <p className="text-sm text-gray-600">Fijai, Kasoa, Ghana</p>
        </div>
      </section>

      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        strategy="afterInteractive"
        onLoad={() => setMapInitialized(true)}
      />


      {/* Map Section */}
      <section className="container mx-auto px-4 pb-12">
        <div
          id="map"
          className="w-full h-80 rounded-lg shadow-md"
        />
      </section>
    </main>
  );
}
