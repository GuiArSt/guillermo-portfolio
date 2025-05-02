"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PublicationCardProps {
  title: string
  subtitle?: string
  image: string
  category: string
}

export default function PublicationCard({ title, subtitle, image, category }: PublicationCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="break-inside-avoid rounded-lg overflow-hidden border shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="text-xs font-medium text-muted-foreground mb-2">{category}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="relative h-64 w-full mb-4">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-md" />
          </div>
          <div className="prose dark:prose-invert">
            <p>
              This is a placeholder for the actual content of the publication. In a real implementation, this would be
              loaded from a CMS or MDX file.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc
              nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc
              nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
            </p>
            <p>
              Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
              Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
