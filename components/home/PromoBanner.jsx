import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link"

export function PromoBanner() {
  return (
    <section className="bg-[#80b949] py-12 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex-1 text-left">
            <p className="mt-2 text-gray-50 text-sm mb-3 tracking-wider">PROVIDING ADVANCED</p>
            <h2 className="text-2xl font-bold text-gray-50 mb-6 tracking-wider">MEDICAL SERVICES</h2>
            <hr className="w-16 mb-7" />
            <div className="mt-4 flex gap-4 justify-center">
                <Card className="flex flex-col gap-2 p-4 bg-transparent w-1/2">
                    <Phone className="text-gray-50" />
                    <div>
                        <div className="text-sm text-gray-50 tracking-wide">Hotline</div>
                        <div className="font-medium text-[#2d3738] text-sm">0249009988</div>
                    </div>
                </Card>
                <Card className="flex flex-col gap-2 p-4 bg-transparent w-1/2 hover:bg-[#5b8432]">
                <Link href="mailto:steredapharmaceuticals@gmail.com">
                <Mail className="text-gray-50" />
                    <div>
                        <div className="text-sm text-gray-50 tracking-wide">Email Us</div>
                        <div className="font-medium break-words text-sm text-[#2d3738]">steredapharmacy@gmail.com</div>
                    </div>
                </Link>
                    
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
