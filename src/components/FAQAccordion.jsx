import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {faqs.map(([question, answer], index) => (
        <div key={question} className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-950"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            <span>{question}</span>
            <ChevronDown className={`shrink-0 transition ${open === index ? 'rotate-180' : ''}`} size={18} />
          </button>
          {open === index && <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{answer}</p>}
        </div>
      ))}
    </div>
  )
}

