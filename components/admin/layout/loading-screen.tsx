// components/admin/loading-screen.tsx
"use client"

import { Shield } from "lucide-react"

export function LoadingScreen({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-[#007BFF] font-mono py-10 animate-pulse">
      <Shield className="w-10 h-10 text-[#1ED3B6]" />
      <p className="text-sm font-medium mt-2">{message}</p>
    </div>
  )
}
