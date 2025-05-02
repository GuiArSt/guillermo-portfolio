"use client"

import { useState } from "react"

interface FilterPillProps {
  name: string
  isActive?: boolean
}

export default function FilterPill({ name, isActive = false }: FilterPillProps) {
  const [active, setActive] = useState(isActive)

  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-muted-foreground"
      }`}
      onClick={() => setActive(!active)}
    >
      {name}
    </button>
  )
}
