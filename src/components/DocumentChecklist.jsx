import { FileCheck2 } from 'lucide-react'

export default function DocumentChecklist({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800">
          <FileCheck2 className="text-amber-600" size={18} /> {item}
        </div>
      ))}
    </div>
  )
}

