import { Link } from 'react-router-dom'
import { placeholders, products } from '../data/insuranceProducts'

export default function Footer() {
  const personal = products.filter((p) => !p.slug.includes('group') && !p.slug.includes('keyman') && !p.slug.includes('employer') && p.slug !== 'business-insurance')
  const business = products.filter((p) => p.slug === 'business-insurance' || p.slug.includes('group') || p.slug.includes('keyman') || p.slug.includes('employer'))
  const socials = [
    ['Facebook', placeholders.facebook],
    ['Instagram', placeholders.instagram],
    ['YouTube', placeholders.youtube],
  ].filter(([, href]) => href)
  return (
    <footer className="bg-slate-950 px-4 pb-24 pt-14 text-slate-300 md:pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black text-white">Insure to Secure</h2>
          <p className="mt-3 text-sm leading-6">Education-first insurance advisory by Dr. Maria Pramila.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Personal Insurance</h3>
          <div className="mt-3 grid gap-2 text-sm">{personal.map((p) => <Link key={p.slug} to={`/${p.slug}`} className="hover:text-amber-300">{p.name}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-bold text-white">Business Insurance</h3>
          <div className="mt-3 grid gap-2 text-sm">{business.map((p) => <Link key={p.slug} to={`/${p.slug}`} className="hover:text-amber-300">{p.name}</Link>)}</div>
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
        Insurance coverage, premiums, eligibility, exclusions, waiting periods, claim process and tax benefits vary by insurer, product and policy terms. This website provides education and consultation support only. Final policy selection should be made after reviewing official policy wording, customer information sheet, insurer brochure, and applicable law. Insurer partner disclosures: [ADD_INSURER_PARTNER_DISCLOSURES].
      </div>
    </footer>
  )
}
