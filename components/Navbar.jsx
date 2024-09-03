'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@public/assets/images/logo.jpg'
import { usePathname } from 'next/navigation'
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel,
  } from '@headlessui/react'
import clsx from 'clsx'

function CloseIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
    )
}

function ChevronDownIcon(props) {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
        <path
            d="M1.75 1.75 4 4.25l2.25-2.5"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
    )
}

function MobileNavItem({ href, children }) {
    return (
        <li>
            <PopoverButton as={Link} href={href} className="block py-2">
                {children}
            </PopoverButton>
        </li>
    )
}

function MobileNavigation(props) {
    return (
        <Popover {...props}>
            {({ open })=> (
                <>
                    <PopoverButton className="group flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm text-zinc-600 font-medium shadow-lg">
                        Menu
                        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
                    </PopoverButton>
                    {open && (
                        <>
                            <PopoverBackdrop
                                transition
                                className="fixed inset-0 z-50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
                            />
                            <PopoverPanel
                                focus
                                transition
                                className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-gray-200 p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="flex flex-row-reverse items-center justify-between">
                                    <PopoverButton aria-label="Close menu" className="-m-1 p-1">
                                        <CloseIcon className="h-6 w-6 text-zinc-600" />
                                    </PopoverButton>
                                    <h2 className="text-sm font-medium text-zinc-600">
                                        Navigation
                                    </h2>
                                </div>
                                <nav className="mt-6">
                                    <ul className="-my-2 divide-y text-zinc-600 divide-zinc-100 text-base">
                                        <MobileNavItem href="/">Home</MobileNavItem>
                                        <MobileNavItem href="/about">About</MobileNavItem>
                                        <MobileNavItem href="/gallery">Gallery</MobileNavItem>
                                        <MobileNavItem href="/products">Products</MobileNavItem>
                                        <MobileNavItem href="/services">Services</MobileNavItem>
                                        <MobileNavItem href="/contactus">Contact Us</MobileNavItem>
                                        <MobileNavItem href="/shopnow" className="!text-green-600">Shop Now</MobileNavItem>
                                    </ul>
                                </nav>
                            </PopoverPanel>
                        </>
                    )}
                </>
            )}
        </Popover>
    )
}

function DesktopNavigation(props) {
    return (
      <nav {...props}>
        <ul className="flex px-4 text-sm font-medium text-gray-100">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/products">Products</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/contactus">Contact Us</NavItem>
          <NavItem href="/shopnow">Shop Now</NavItem>
        </ul>
      </nav>
    )
}

function NavItem({ href, children }) {
    let isActive = usePathname() === href

    return (
      <li>
        <Link
          href={href}
          className={clsx(
            'relative block px-3 py-2 transition',
            isActive
              ? 'text-green-700'
              : 'hover:text-green-700',
          )}
        >
          {children}
          {isActive && (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
          )}
        </Link>
      </li>
    )
}

export default function Navbar() {
    return (
        <nav className="bg-red-600 sticky top-0 z-50 py-1 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center space-x-4">
                        <Image src={logo} alt="Stereda Pharmacy" className='w-8' />
                        <h1 className="text-lg font-bold text-gray-100">Stereda Pharmacy</h1>
                    </div>
                </Link>
                <div className="flex flex-1 justify-end">
                    <MobileNavigation className="pointer-events-auto md:hidden" />
                    <DesktopNavigation className="pointer-events-auto hidden md:block" />
                </div>
            </div>
        </nav>
    )
}