"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-fade-in-up p-0"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </>
  )
}
