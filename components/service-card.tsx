import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  image: string
  excerpt: string
  slug: string
}

export default function ServiceCard({ title, image, excerpt, slug }: ServiceCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl border">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-white/80">{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
