// 'use client'
// import Link from 'next/link'

// function InstagramIcon(props) {
//     return (
//         <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//             <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z" fill='#52525b' />
//             <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" fill='#52525b' />
//         </svg>
//     )
// }

// function FacebookIcon(props) {
//     return (
//         <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//             <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.65 9.13 8.43 9.88v-6.99H8.1V12h2.33v-1.73c0-2.3 1.38-3.56 3.47-3.56.995 0 1.85.074 2.1.107v2.43h-1.45c-1.14 0-1.36.54-1.36 1.33V12h2.72l-.35 2.93h-2.37v6.99c4.78-.75 8.43-4.89 8.43-9.88 0-5.52-4.48-10-10-10z" fill='#52525b' />
//         </svg>
//     )
// }

// function MailIcon(props) {
//     return (
//         <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//             <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm-16 2v10h16V8l-8 5-8-5z" fill='#52525b' />
//         </svg>

//     )
// }

// export default function Navbar() {
//     return (
//         <footer className="bg-gray-200 text-zinc-600 py-8 px-10 md:px-52">
//             <div className="container grid grid-cols-2">
//                 <div className="space-y-2 text-sm font-semibold">
//                     <h4 className="text-lg font-bold">Connect</h4>
//                     <br />
//                     <Link href="https://www.instagram.com/steredapharmaceuticals/" target='_blank' className='flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
//                         <InstagramIcon className="w-6 mr-1"/>
//                         <p>Instagram</p>
//                     </Link>
//                     <br />
//                     <Link href="https://web.facebook.com/steredapharmaceuticals" target='_blank' className='flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
//                         <FacebookIcon className="w-6 mr-1"/>
//                         <p>Facebook</p>
//                     </Link>
//                     <br />
//                     <Link href="mailto:steredapharmaceuticals@gmail.com" className='flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
//                         <MailIcon className="w-6 mr-1"/>
//                         <p>Mail</p>
//                     </Link>
//                 </div>
//                 <div>
//                 <form action='/thank-you' className="w-full max-w-sm">
//                     <div className='flex'>
//                         <MailIcon className="w-6 mr-1"/>
//                         <h2 className='font-bold text-lg'>Stay up to date</h2>
//                     </div>
//                     <p className="block text-left text-zinc-600 mb-2">
//                         Subscribe to get the latest health news and health tips and keep updated on new products, offers and promos
//                     </p>
//                     <input
//                     type="email"
//                     aria-label="Email address"
//                     required
//                     placeholder="Email address"
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                     />
//                     <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Subscribe</button>
//                 </form>
//                 </div>
//             </div>
//             <div className="text-sm text-center mt-10 -mb-5">
//                 <p>&copy; 2024 Stereda Pharmaceuticals Ltd. All rights reserved.</p>
//             </div>
//         </footer>
//     )
// }


// components/Footer.tsx
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Truck,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-[#2d3738]">
      {/* Feature Highlights */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Truck className="text-[#80b949]" size={32} />
            <div>
              <h5 className="font-medium text-sm uppercase tracking-wide">Free Shipping</h5>
              <p className="text-sm tracking-wide">On wholesale orders</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <CheckCircle className="text-[#80b949]" size={32} />
            <div>
              <h5 className="font-medium text-sm uppercase tracking-wide">100% Satisfaction</h5>
              <p className="text-sm tracking-wide">Or your money back</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Headphones className="text-[#80b949]" size={32} />
            <div>
              <h5 className="font-medium text-sm uppercase tracking-wide">24/7 Support</h5>
              <p className="text-sm tracking-wide">We’re here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* ——————————————————————————————— */}
      {/* Main Links */}
      <div className="bg-[#2d3738] text-xs text-gray-300 py-12 border-b border-b-gray-600">
        <div className="container mx-auto px-4 grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Information</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">My Account</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Addresses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Extras</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Specials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Contact Info</h4>
            <ul className="space-y-3 text-xs">
              <li>No. ANT 7/2 Aplaku Newtown Weija Accra, Opp. Petrosol Filling Station, Block factory-Kasoa Rd</li>
              <li>+233 249 009 988</li>
              <li><Link href="mailto:steredapharmaceuticals@gmail.com" className="hover:text-white">steredapharmaceuticals@gmail.com</Link></li>
            </ul>
            <div className="flex space-x-4 mt-4 justify-center">
              <Link href="https://web.facebook.com/steredapharmaceuticals" target="_blank" className="hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.instagram.com/steredapharmaceuticals/" target='_blank' className="hover:text-white">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ——————————————————————————————— */}
      {/* Bottom Bar */}
      <div className="bg-[#2d3738] border-b border-b-gray-600 text-gray-400 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Stay Connected */}
          <div className="flex items-center space-x-4">
            <span className="uppercase text-sm tracking-wider">Stay Connected:</span>
            <Link href="https://web.facebook.com/steredapharmaceuticals" target="_blank" className="hover:text-white">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter size={18} />
            </Link>
            <Link href="https://www.instagram.com/steredapharmaceuticals/" target='_blank' className="hover:text-white">
              <Instagram size={18} />
            </Link>
          </div>

          {/* Newsletter Signup */}
          <form action='/thank-you' className="flex items-center space-x-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:flex-initial bg-gray-100 text-sm tracking-wide rounded-full"
            />
            <Button size="sm" className="bg-[#80b949] hover:bg-[#5b8432] tracking-wide">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* ——————————————————————————————— */}
      {/* Copyright */}
      <div className="bg-[#2d3738] tracking-wide text-gray-600 text-center py-4 text-xs">
        &copy; {new Date().getFullYear()} Stereda Pharmacy. All rights reserved.
      </div>
    </footer>
  );
}
