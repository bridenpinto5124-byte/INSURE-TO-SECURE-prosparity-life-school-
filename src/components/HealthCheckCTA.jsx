import { MessageCircle, ShieldCheck } from 'lucide-react'
import CTAButton from './CTAButton'
import { placeholders } from '../data/insuranceProducts'

export default function HealthCheckCTA() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-slate-950">
            <ShieldCheck size={18} /> Free Insurance Health Check-Up
          </div>
          <h3 className="mt-5 text-3xl font-black text-white md:text-4xl">Send Us Your Current Insurance Details.</h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Send us your current insurance details and we will help you understand whether your family, income, parents, vehicle, and business are properly protected.
          </p>
          <p className="mt-4 text-sm font-semibold text-amber-100">
            No pressure. No confusion. Just a clear review of what you already have and what may need attention.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#lead-forms">Book Review</CTAButton>
            <CTAButton variant="secondary" href={`https://wa.me/${placeholders.whatsapp}`}><MessageCircle size={16} /> WhatsApp My Policy Details</CTAButton>
          </div>
        </div>
        <div className="rounded-lg border border-amber-300/30 bg-slate-950/70 p-5 text-sm leading-7 text-slate-200">
          <p className="font-black text-amber-200">What You Can Share</p>
          <ul className="mt-3 space-y-2">
            <li>Current Health Insurance or Life Insurance details</li>
            <li>Parents Insurance or Senior Citizen Health Insurance details</li>
            <li>Vehicle Insurance renewal information</li>
            <li>Business Insurance or employee benefit requirements</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
