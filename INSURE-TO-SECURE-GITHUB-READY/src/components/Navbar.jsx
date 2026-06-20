import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, MessageCircle, PhoneCall, ShieldCheck, X } from 'lucide-react'
import CTAButton from './CTAButton'
import { placeholders } from '../data/insuranceProducts'

const nav = [
  ['Insurance Types', '/#insurance-types'],
  ['Free Check-Up', '/#free-checkup'],
  ['Why Advisor', '/#why-advisor'],
  ['How It Works', '/#how-it-works'],
  ['FAQs', '/#faqs'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8" aria-label="Primary navigation">
          <Link to="/" className="flex items-center gap-3 text-white">
            <span className="rounded-lg bg-amber-400 p-2 text-slate-950"><ShieldCheck size={22} /></span>
            <span>
              <span className="block text-lg font-black">Insure to Secure</span>
              <span className="block text-xs text-slate-300">by Dr. Maria Pramila</span>
            </span>
          </Link>
          <div className="hidden items-center gap-6 lg:flex">
            {nav.map(([label, href]) => <Link key={label} to={href} className="text-sm font-semibold text-slate-200 hover:text-amber-300">{label}</Link>)}
          </div>
          <div className="hidden lg:block"><CTAButton to="/#lead-forms">Book Free Review</CTAButton></div>
          <button type="button" className="rounded-lg border border-white/15 p-2 text-white lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu /></button>
        </nav>
        {open && (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
            <div className="mb-4 flex justify-end">
              <button type="button" className="text-white" aria-label="Close menu" onClick={() => setOpen(false)}><X /></button>
            </div>
            <div className="grid gap-3">
              {nav.map(([label, href]) => <Link key={label} to={href} onClick={() => setOpen(false)} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white">{label}</Link>)}
              <CTAButton to="/#lead-forms">Book Free Review</CTAButton>
            </div>
          </div>
        )}
      </header>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-slate-950 text-xs font-bold text-white shadow-2xl md:hidden">
        <Link to="/#lead-forms" className="flex items-center justify-center gap-1 py-3"><PhoneCall size={15} /> Book Free Review</Link>
        <a href={`https://wa.me/${placeholders.whatsapp}`} className="flex items-center justify-center gap-1 border-x border-white/10 py-3"><MessageCircle size={15} /> WhatsApp Advisor</a>
        <Link to="/#free-checkup" className="flex items-center justify-center gap-1 py-3"><ShieldCheck size={15} /> Check-Up</Link>
      </div>
    </>
  )
}
