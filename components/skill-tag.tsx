export default function SkillTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
      {name}
    </span>
  )
}
