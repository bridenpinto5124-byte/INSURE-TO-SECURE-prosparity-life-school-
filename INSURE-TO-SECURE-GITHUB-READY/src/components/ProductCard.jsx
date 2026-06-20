import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProductCard({ product }) {
  const Icon = product.icon
  return (
    <Link
      to={`/${product.slug}`}
      className="group block rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:ring-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
      aria-label={`Open ${product.name} landing page`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="rounded-lg bg-slate-950 p-3 text-amber-300"><Icon size={24} /></span>
        <ArrowUpRight className="text-slate-400 transition group-hover:text-amber-500" />
      </div>
      <h3 className="text-xl font-bold text-slate-950">{product.name}</h3>
      <p className="mt-2 font-semibold text-slate-800">{product.cardHeadline}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{product.summary}</p>
      <div className="mt-4 space-y-2 text-sm">
        <p><span className="font-bold text-slate-950">Best for:</span> {product.bestFor}</p>
        <p><span className="font-bold text-slate-950">What to check:</span> {product.whatToCheck}</p>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">Subject to policy terms. Final policy wording applies.</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">/{product.slug}</span>
        <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-700">Open guide <ArrowUpRight size={15} /></span>
      </div>
    </Link>
  )
}
