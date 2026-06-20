import { CheckCircle2 } from 'lucide-react'

export default function TrustBadges({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white backdrop-blur">
          <CheckCircle2 className="mb-2 text-amber-300" size={20} /> {item}
        </div>
      ))}
    </div>
  )
}

