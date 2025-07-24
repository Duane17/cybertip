"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-white border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link href="#" className="text-gray-600 hover:text-[#1ED3B6] transition-colors">
              About
            </Link>
            <Link href="/report" className="text-gray-600 hover:text-[#1ED3B6] transition-colors">
              Report a Bug
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#1ED3B6] transition-colors">
              View Reports
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#1ED3B6] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Branded Attribution */}
          <div className="flex items-center space-x-2 text-gray-600">
            <img
              src="/logo.png"
              alt="CyberTip Malawi Logo"
              className="w-5 h-5 rounded-sm object-contain"
            />
            <p className="text-sm">
              © CyberTip Malawi 2025. Made for and by Malawians.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
