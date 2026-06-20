import { Link } from 'react-router-dom'
import { legalDisclaimer, placeholders } from '../data/insuranceProducts'

export default function Footer() {
  const socials = [
    ['Facebook', placeholders.facebook],
    ['Instagram', placeholders.instagram],
    ['YouTube', placeholders.youtube],
  ].filter(([, href]) => href)
  return (
    <footer className="bg-slate-950 px-4 pb-24 pt-14 text-slate-300 md:pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black text-white">Insure To Secure</h2>
          <p className="mt-3 text-sm leading-6">Education-first insurance advisory by Dr. Maria Pramila.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Insurance Types</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <Link to="/#insurance-types" className="hover:text-amber-300">Insurance Types</Link>
            <Link to="/#lead-forms" className="hover:text-amber-300">Book Review</Link>
            <Link to="/#lead-forms" className="hover:text-amber-300">Business Consultation</Link>
            <a href={`https://wa.me/${placeholders.whatsapp}`} className="hover:text-amber-300">WhatsApp Advisor</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Core Services</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <Link to="/health-insurance" className="hover:text-amber-300">Health Insurance</Link>
            <Link to="/life-insurance" className="hover:text-amber-300">Life Insurance</Link>
            <Link to="/accidental-insurance" className="hover:text-amber-300">Accidental Insurance</Link>
            <Link to="/vehicle-insurance" className="hover:text-amber-300">Vehicle Insurance</Link>
            <Link to="/nri-health-insurance" className="hover:text-amber-300">NRI Health Insurance</Link>
            <Link to="/business-insurance" className="hover:text-amber-300">Business Insurance</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Legal & Support</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#disclaimer">Disclaimer</a>
            <a href="#grievance">Grievance Redressal</a>
            <a href={`https://wa.me/${placeholders.whatsapp}`}>WhatsApp Us</a>
            {socials.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs leading-6">
        {legalDisclaimer}
      </div>
    </footer>
  )
}
