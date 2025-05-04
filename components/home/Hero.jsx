import { Button } from "@components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[40vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/img13.jpg"
          alt="Pharmacy"
          fill
          priority
          className="blur-xs"
        />
        <div className="absolute inset-0" />
      </div>
      
      <div className="pl-10 container relative z-10 flex justify-center h-full items-center">
        <div className="w-xs space-y-6 text-[#2d3738]">
            <p className="text-sm">
              WE HELP YOU
            </p>
            <h1 className="text-3xl font-bold leading-tight">
              TO LIVE A HEALTHY LIFE
            </h1>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-[#2d3738] hover:bg-white/90">
                <Link href='/services'>Our Services</Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}