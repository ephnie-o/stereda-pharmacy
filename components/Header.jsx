import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex mx-auto h-16 p-4 items-center justify-between text-[#2d3738]">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/images/logo.jpg" width={30} height={30} alt="Pharmacy Logo" className="object-cover" />
          <span className="text-sm font-bold lg:text-xl tracking-wide uppercase hover:text-[#5b8432] transition">Stereda Pharmacy</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-gray-700 md:flex">
          <Link href="/" className="hover:text-[#5b8432] transition">Home</Link>
          <Link href="/about" className="hover:text-[#5b8432] transition">About</Link>
          <Link href="/products" className="hover:text-[#5b8432] transition">Products</Link>
          <Link href="/services" className="hover:text-[#5b8432] transition">Services</Link>
          <Link href="/gallery" className="hover:text-[#5b8432] transition">Gallery</Link>
          <Link href="/contactus" className="hover:text-[#5b8432] transition">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            <Link href="/contactus">Contact Us</Link>
          </Button>
          <Button size="sm" className="bg-[#80b949] hover:bg-[#5b8432]">
            <Link href="/shopnow"  className="text-white">Shop</Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden text-gray-700">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products">Products</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/gallery">Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contactus">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}