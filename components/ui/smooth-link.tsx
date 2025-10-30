"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode, MouseEvent, useTransition } from "react"

interface SmoothLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function SmoothLink({ href, children, className, onClick }: SmoothLinkProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call optional onClick handler first
    if (onClick) {
      onClick(e)
    }

    // Only handle internal links if not prevented
    if (href.startsWith("/") && !e.defaultPrevented) {
      e.preventDefault()

      // Navigate immediately without scrolling
      startTransition(() => {
        router.push(href)
      })
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
