"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const sampleProducts = {
  featured: [
    { id: "1", name: "Steremed Syrup", img: "/assets/images/steremed.jpg", href:'/products/steremed' },
    { id: "2", name: "Sterevite Syrup", img: "/assets/images/sterevite.jpg", href:'/products/sterevite' },
    { id: "3", name: "Sterecol Gummies", img: "/assets/images/sterecol.jpeg", href:'/products/sterecol' },
    { id: "4", name: "Steredex Chesty Cough Syrup", img: "/assets/images/steredexchesty.jpeg", href:'/products/steredex-chesty-cough' },
    { id: "5", name: "Steredex-Ls Cough Syrup", img: "/assets/images/steredexls.jpeg", href:'/products/steredex-ls-expectorant' },
    { id: "6", name: "Steredex Cough Suppressant", img: "/assets/images/steredexsupp.jpeg", href:'/products/steredex-cough-suppressant' },
    { id: "7", name: "Brown Elastic Bandage", img: "/assets/images/brownbandage6.jpeg", href:'/products/bandages' },
    { id: "8", name: "White Elastic Bandage", img: "/assets/images/whitebandage6.jpeg", href:'/products/bandages' },
    { id: "9", name: "Max-B Tablets", img: "/assets/images/MaxB2.jpeg", href:'/products/max-B' },
    { id: "10", name: "Max B12 Gummies", img: "/assets/images/MaxB12Gummies.jpeg", href:'/products/max-B12-gummies' },
    { id: "11", name: "Respizeal Syrup", img: "/assets/images/Respizeal2.jpeg", href:'/products/respizeal' },
    { id: "12", name: "Zeoxon-CZ Effervescent", img: "/assets/images/Zeoxon2.jpeg", href:'/products/zeoxon-CZ' },
    { id: "13", name: "Steree-L Syrup", img: "/assets/images/steree-l.jpeg", href:'/products/steree-l' },
    { id: "14", name: "Magalin Capsules", img: "/assets/images/magalin.jpeg", href:'/products/magalin' },
    { id: "15", name: "Stepac Tablets", img: "/assets/images/stepac.jpeg", href:'/products/stepac' },
  ],
  latest: [
    { id: "1", name: "Sterecol Gummies", img: "/assets/images/sterecol.jpeg", href:'/products/sterecol' },
    { id: "2", name: "Steredex Chesty Cough Syrup", img: "/assets/images/steredexchesty.jpeg", href:'/products/steredex-chesty-cough' },
    { id: "3", name: "Steredex-Ls Cough Syrup", img: "/assets/images/steredexls.jpeg", href:'/products/steredex-ls-expectorant' },
    { id: "4", name: "Steredex Cough Suppressant", img: "/assets/images/steredexsupp.jpeg", href:'/products/steredex-cough-suppressant' },
    { id: "5", name: "Brown Elastic Bandage", img: "/assets/images/brownbandage6.jpeg", href:'/products/bandages' },
    { id: "6", name: "White Elastic Bandage", img: "/assets/images/whitebandage6.jpeg", href:'/products/bandages' },
    { id: "7", name: "Max-B Tablets", img: "/assets/images/MaxB2.jpeg", href:'/products/max-B2-tablets' },
    { id: "8", name: "Max B12 Gummies", img: "/assets/images/MaxB12Gummies.jpeg", href:'/products/max-B12-gummies' },
    { id: "9", name: "Respizeal Syrup", img: "/assets/images/Respizeal2.jpeg", href:'/products/respizeal-syrup' },
    { id: "10", name: "Zeoxon-CZ Effervescent", img: "/assets/images/Zeoxon2.jpeg", href:'/products/zeoxon-CZ-effervescent' },
    { id: "11", name: "Steree-L Syrup", img: "/assets/images/steree-l.jpeg", href:'/products/steree-l' },
    { id: "12", name: "Magalin Capsules", img: "/assets/images/magalin.jpeg", href:'/products/magalin' },
    { id: "13", name: "Stepac Tablets", img: "/assets/images/stepac.jpeg", href:'/products/stepac' },
   ],
  specials: [
    { id: "1", name: "Steremed Syrup", img: "/assets/images/steremed.jpg", href:'/products/steremed' },
    { id: "2", name: "Sterevite Syrup", img: "/assets/images/sterevite.jpg", href:'/products/sterevite' },
    { id: "3", name: "Sterecol Gummies", img: "/assets/images/sterecol.jpeg", href:'/products/sterecol' },
    { id: "4", name: "Steredex Chesty Cough Syrup", img: "/assets/images/steredexchesty.jpeg", href:'/products/steredex-chesty-cough' },
    { id: "5", name: "Steredex-Ls Cough Syrup", img: "/assets/images/steredexls.jpeg", href:'/products/steredex-ls-expectorant' },
    { id: "6", name: "Steredex Cough Suppressant", img: "/assets/images/steredexsupp.jpeg", href:'/products/steredex-cough-suppressant' },
    { id: "7", name: "Max-B Tablets", img: "/assets/images/MaxB2.jpeg", href:'/products/max-B2-tablets' },
    { id: "8", name: "Max B12 Gummies", img: "/assets/images/MaxB12Gummies.jpeg", href:'/products/max-B12-gummies' },
    { id: "9", name: "Respizeal Syrup", img: "/assets/images/Respizeal2.jpeg", href:'/products/respizeal-syrup' },
    { id: "10", name: "Zeoxon-CZ Effervescent", img: "/assets/images/Zeoxon2.jpeg", href:'/products/zeoxon-CZ-effervescent' },
    { id: "11", name: "Steree-L Syrup", img: "/assets/images/steree-l.jpeg", href:'/products/steree-l' },
    { id: "12", name: "Magalin Capsules", img: "/assets/images/magalin.jpeg", href:'/products/magalin' },
    { id: "13", name: "Stepac Tablets", img: "/assets/images/stepac.jpeg", href:'/products/stepac' },
   ],
};

export function ProductTabs() {
    const videoRef = useRef(null);

  return (
    <Tabs defaultValue="featured" className="container mx-auto px-4 mt-7">
        <TabsList className="flex w-full justify-center space-x-8 text-[#2d3738]">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="specials">Specials</TabsTrigger>
        </TabsList>

        {(["featured","latest","specials"]).map((tab) => (
            <TabsContent key={tab} value={tab} className="pt-6">
                <div className="grid grid-cols-1 mb-6">
                    {/* Video Card - spans full width */}
                    <Card className="overflow-hidden">
                    
                    <div className="relative w-full h-64 sm:h-80 md:h-96">
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            controls
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/assets/images/SteredaVideo.mp4" type="video/mp4" />
                        </video>
                    </div>
                    
                    
                    </Card>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sampleProducts[tab].map((p) => (
                        <Link key={p.id} href={p.href}>
                            <Card className="group hover:bg-gray-200 transition">
                                <CardHeader>
                                <div className="relative w-full h-40">
                                    <Image src={p.img} alt={p.name} fill className="object-cover" />
                                </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                <CardTitle className="text-sm font-medium tracking-wide uppe text-[#2d3738]">{p.name}</CardTitle>
                                {/* <div className="mt-2 flex items-baseline justify-center gap-2">
                                    <span className="font-bold">${p.price.toFixed(2)}</span>
                                    {p.oldPrice && (
                                    <span className="text-sm line-through text-gray-400">
                                        ${p.oldPrice.toFixed(2)}
                                    </span>
                                    )}
                                </div> */}
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-1 mb-6 mt-6">
                    {/* Video Card - spans full width */}
                    <Card className="overflow-hidden">
                    
                    <div className="relative w-full">
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            controls
                            playsInline
                            className="w-full h-auto max-h-[90vh] object-contain"
                        >
                            <source src="/assets/images/clip.mp4" type="video/mp4" />
                        </video>
                    </div>
                    
                    
                    </Card>
                </div>
            </TabsContent>
        ))}
    </Tabs>
  );
}
