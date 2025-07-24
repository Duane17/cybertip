"use client"

import Link from "next/link"
import { useState } from "react"
import { ShieldCheck, Menu } from "lucide-react"
import { MobileSidebar } from "./mobile-sidebar"

export function Topbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative w-full h-14 px-4 md:px-5 bg-white/80 backdrop-blur-md flex items-center justify-between shadow-sm border-b border-gray-100/70">
      {/* Left: Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-gray-700 hover:text-[#1ED3B6] transition z-10"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Center: Logo (absolutely centered on mobile, normal flow on md+) */}
      <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center space-x-2">
        <Link href="/admin" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="CyberTip Malawi"
            className="w-6 h-6 rounded object-contain"
          />
          <span className="text-sm font-bold text-[#1A1A1A]">CyberTip Admin</span>
        </Link>
      </div>

      {/* Right: Desktop dashboard label (empty on mobile) */}
      <div className="hidden md:flex items-center space-x-2">
        <ShieldCheck className="w-4 h-4 text-[#1ED3B6]" />
        <h1 className="text-sm font-semibold text-[#1A1A1A]">Dashboard</h1>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar open={open} onOpenChange={setOpen} />
    </header>
  )
}
