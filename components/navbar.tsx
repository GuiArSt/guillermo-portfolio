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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
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
