"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Bug, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/reports", label: "Reports", icon: Bug },
  { href: "/", label: "Back to Site", icon: ArrowLeft },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-60 min-h-screen bg-white hidden md:flex flex-col shadow-[0_0_12px_-6px_rgba(0,0,0,0.1)]">
      {/* Logo / Brand */}
      <div className="h-14 flex items-center justify-center px-4 border-b border-gray-100/70">
        <Link href="/" className="flex items-center space-x-2 group">
          <img src="/logo.png" alt="CyberTip Malawi" className="w-7 h-7 rounded object-contain" />
          <span className="text-sm font-bold text-gray-800 group-hover:text-[#1ED3B6] transition-colors">
            CyberTip Admin
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-2 rounded-lg text-xs font-medium transition-all",
                    active
                      ? "bg-[#1ED3B6]/10 text-[#1ED3B6]"
                      : "text-gray-600 hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/10"
                  )}
                >
                  <Icon className={cn("w-3.5 h-3.5", active ? "text-[#1ED3B6]" : "text-gray-500")} />
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
