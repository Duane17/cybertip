"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Home, Eye, Info, Bug } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/report", label: "Report a Bug", icon: Bug },
    { href: "/reports", label: "View Reports", icon: Eye },
    { href: "/about", label: "About", icon: Info },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 font-mono animate-slide-down">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="CyberTip Malawi"
              className="w-10 h-10 rounded-xl object-contain"
            />
            <span className="hidden sm:block text-xl font-bold text-[#1A1A1A]">
              CyberTip <span className="text-[#1ED3B6]">Malawi</span>
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-600 hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/5 transition-all duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl px-6 py-2 font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1ED3B6]/25"
            >
              <Link href="/report">Report Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Menu className="w-6 h-6 text-gray-600" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white font-mono">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <img
                    src="/logo.png"
                    alt="CyberTip Malawi"
                    className="w-10 h-10 rounded-xl object-contain"
                  />
                  <span className="text-xl font-bold text-[#1A1A1A]">
                    CyberTip <span className="text-[#1ED3B6]">Malawi</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/5 transition-all duration-300 group w-full"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-lg">{item.label}</span>
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <Button
                    asChild
                    className="w-full bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl py-3 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/report">Report a Bug Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
