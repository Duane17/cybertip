"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Bug, ArrowLeft, ExternalLink, LogOut } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface MobileSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/reports", label: "Reports", icon: Bug },
]

export function MobileSidebar({ open, onOpenChange }: MobileSidebarProps) {
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    onOpenChange(false)
  }, [pathname, onOpenChange])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {/* Trigger is handled in Topbar */}
      <SheetTrigger asChild>{/* noop */}</SheetTrigger>

      <SheetContent side="left" className="w-60 px-0">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
            Use this panel to navigate admin sections like Dashboard and Reports.
        </SheetDescription>
        {/* Logo / Brand */}
        <div className="h-14 flex items-center px-4 border-b border-gray-100/70">
          <Link href="/admin" className="flex items-center space-x-2 group">
            <img src="/logo.png" alt="CyberTip" className="w-6 h-6 rounded object-contain" />
            <span className="text-sm font-bold text-gray-800 group-hover:text-[#1ED3B6] transition">
              CyberTip Admin
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col mt-4 px-2 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <SheetClose asChild key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-2 rounded-lg text-xs font-medium transition-all",
                    active
                      ? "bg-[#1ED3B6]/10 text-[#1ED3B6]"
                      : "text-gray-600 hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/10"
                  )}
                >
                  <Icon className={cn("w-4 h-4", active ? "text-[#1ED3B6]" : "text-gray-500")} />
                  <span>{label}</span>
                </Link>
              </SheetClose>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="my-4 h-px bg-gray-100 mx-4" />

        {/* Secondary actions */}
        <div className="px-2 space-y-1 text-xs font-medium">
          <SheetClose asChild>
            <Link
              href="/"
              className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/10 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-gray-500" />
              <span>View Site</span>
            </Link>
          </SheetClose>

          <button
            className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all"
            // onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 text-gray-500" />
            <span>Logout</span>
          </button>

          <SheetClose asChild>
            <Link
              href="/"
              className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/10 transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-gray-500" />
              <span>Back to Site</span>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
