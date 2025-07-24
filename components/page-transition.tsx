"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    // Small delay to show loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#1ED3B6]/20 rounded-2xl flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-[#1ED3B6] rounded-full animate-bounce" />
          </div>
          <span className="text-[#1ED3B6] font-mono font-medium">Loading...</span>
        </div>
      </div>
    )
  }

  return <div className="animate-page-fade-in">{children}</div>
}
