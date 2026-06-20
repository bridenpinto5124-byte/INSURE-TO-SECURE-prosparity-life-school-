import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import CTAButton from './CTAButton'
import DisclaimerBox from './DisclaimerBox'
import DocumentChecklist from './DocumentChecklist'
import FAQAccordion from './FAQAccordion'
import LeadForm from './LeadForm'
import ProductCard from './ProductCard'
import { businessRoutes } from '../data/mainContent'
import { claimSupportSteps, legalDisclaimer, placeholders } from '../data/insuranceProducts'

function Section({ title, intro, children, dark = false }) {
  return (
    <section className={dark ? 'bg-slate-950 px-4 py-12 text-white sm:py-14 lg:px-8' : 'px-4 py-12 sm:py-14 lg:px-8'}>
      <div className="mx-auto max-w-7xl">
        <h2 className={dark ? 'text-3xl font-black text-white' : 'text-3xl font-black text-slate-950'}>{title}</h2>
        {intro && <p className={dark ? 'mt-3 max-w-3xl leading-7 text-slate-300' : 'mt-3 max-w-3xl leading-7 text-slate-600'}>{intro}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}

function BulletGrid({ items, dark = false }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className={`rounded-lg border p-4 text-sm leading-6 shadow-sm ${dark ? 'border-white/10 bg-white/10 text-slate-100 backdrop-blur' : 'border-slate-200 bg-white text-slate-700'}`}>{item}</div>
      ))}
    </div>
  )
}

function isBusinessProduct(product) {
  return product.hub || product.slug.includes('group') || product.slug.includes('keyman') || product.slug.includes('employer')
}

export default function InsurancePageLayout({ product }) {
  const Icon = product.icon
  const business = isBusinessProduct(product)
  const miniFaqs = product.faqs.map((faq) => [faq, 'The answer depends on insurer rules, customer profile, required documents, underwriting, and final policy terms. A review can help you understand the practical next step.'])

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 px-4 py-14 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(251,191,36,.14),transparent_30%),linear-gradient(135deg,#020617,#0f172a)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <Link to="/#insurance-types" className="inline-flex items-center gap-2 text-sm font-bold text-amber-300"><ArrowLeft size={16} /> Back To Insurance Types</Link>
            <div className="mt-8 flex items-center gap-3 text-amber-200"><Icon /> {product.name}</div>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">{product.headline}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{product.summary} Subject to policy terms, depending on plan and insurer, and final policy wording applies.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#subpage-form">{business ? 'Business Consultation' : 'Book Review'}</CTAButton>
              <CTAButton variant="secondary" href={`https://wa.me/${placeholders.whatsapp}`}><MessageCircle size={16} /> WhatsApp Advisor</CTAButton>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold text-amber-200">Advisor-Led Review</p>
            <h2 className="mt-2 text-2xl font-black">Insure To Secure By Dr. Maria Pramila</h2>
            <p className="mt-3 text-slate-300">Chartered Wealth Manager - Prosperity Mentor - Author & Public Speaker - Insurance Advisor Since 2007</p>
            <img
              src={placeholders.advisorPhoto}
              alt="Dr. Maria Pramila, Insure To Secure insurance advisor"
              className="mt-5 aspect-[4/3] w-full rounded-lg object-cover object-top"
            />
          </div>
        </div>
      </section>

      <Section title="Who This Is For"><BulletGrid items={product.whoFor} /></Section>
      <Section title="What It Helps With" dark intro="Coverage and benefits depend on insurer, product, policy terms, and underwriting."><BulletGrid items={product.covers} dark /></Section>
      <Section title="What To Check Before Buying"><BulletGrid items={product.checks} /></Section>
      <Section title="Documents Usually Required"><DocumentChecklist items={product.documents} /></Section>
      <Section title="Claim Or Service Support" dark intro="Support is guidance and coordination support. Insurer approval and final policy wording apply."><BulletGrid items={claimSupportSteps} dark /></Section>

      {product.hub && (
        <Section title="Choose A Business Insurance Route" intro="Open a dedicated page for the business insurance structure you want to understand.">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{businessRoutes.map((route) => <ProductCard key={route.slug} product={route} />)}</div>
        </Section>
      )}

      <Section title="FAQs"><FAQAccordion faqs={miniFaqs} /></Section>

      <section id="subpage-form" className="bg-slate-100 px-4 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-black text-slate-950">Book Review</h2>
            <p className="mt-3 leading-7 text-slate-600">Use this short form for {business ? 'a Business Consultation' : 'an insurance review'}. This is education and consultation support, not final policy advice.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#subpage-form">{business ? 'Business Consultation' : 'Book Review'}</CTAButton>
              <CTAButton variant="light" href={`https://wa.me/${placeholders.whatsapp}`}>WhatsApp Advisor</CTAButton>
            </div>
            <div className="mt-6"><DisclaimerBox>{legalDisclaimer}</DisclaimerBox></div>
          </div>
          <LeadForm type={business ? 'business' : 'personal'} compact />
        </div>
      </section>

      <Section title="Safe Disclaimer"><DisclaimerBox>{legalDisclaimer}</DisclaimerBox></Section>
    </main>
  )
}
