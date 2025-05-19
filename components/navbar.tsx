"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Publications", path: "/publications" },
    { name: "About Me", path: "/about" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, opacity: 0.05 }}>
        <defs>
          <pattern id="placeholderPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(128, 128, 128, 0.5)" strokeWidth="1"/>
            <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(128, 128, 128, 0.3)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#placeholderPattern)" />
      </svg>

      <div className="relative z-10 container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Guillermo A. Stumpf
        </Link>

        <nav className="hidden md:flex gap-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(route.path) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/commission"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Commission Me
          </Link>
        </div>
      </div>
    </header>
  )
}
