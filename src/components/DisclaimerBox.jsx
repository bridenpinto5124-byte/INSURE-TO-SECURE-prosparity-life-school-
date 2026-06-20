import { ShieldAlert } from 'lucide-react'
import { legalDisclaimer } from '../data/insuranceProducts'

export default function DisclaimerBox({ children }) {
  return (
    <aside className="rounded-lg border border-amber-200/40 bg-amber-50 p-4 text-sm text-slate-800">
      <div className="mb-2 flex items-center gap-2 font-bold text-slate-950">
        <ShieldAlert size={18} /> Important advisory note
      </div>
      <p>{children || legalDisclaimer}</p>
    </aside>
  )
}
