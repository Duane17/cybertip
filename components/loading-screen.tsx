// components/ui/loading-screen.tsx
"use client"

import { Shield } from "lucide-react"
import { Navbar } from "@/components/navbar"

export function LoadingScreen({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] text-[#007BFF] font-mono">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-2 animate-pulse">
        <Shield className="w-10 h-10 mx-auto text-[#1ED3B6]" />
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  )
}
