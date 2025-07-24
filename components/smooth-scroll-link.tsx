"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ComponentProps } from "react"

interface SmoothScrollLinkProps extends ComponentProps<typeof Link> {
  href: string
  children: React.ReactNode
}

export function SmoothScrollLink({ href, children, ...props }: SmoothScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an internal link (starts with / or #)
    if (href.startsWith("/") || href.startsWith("#")) {
      e.preventDefault()

      // If it's a hash link on the same page
      if (href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // Navigate to new page and scroll will be handled by ScrollToTop component
        router.push(href)
      }
    }

    // For external links, let the default behavior happen
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
