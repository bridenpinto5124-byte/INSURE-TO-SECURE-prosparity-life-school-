import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import ComparisonTable from '../components/ComparisonTable'
import DisclaimerBox from '../components/DisclaimerBox'
import FAQAccordion from '../components/FAQAccordion'
import LeadForm from '../components/LeadForm'
import ProductCard from '../components/ProductCard'
import HealthCheckCTA from '../components/HealthCheckCTA'
import TrustBadges from '../components/TrustBadges'
import { featuredProductSlugs, placeholders, productBySlug } from '../data/insuranceProducts'
import { audienceTabs, comparisonRows, faqs, riskStories } from '../data/mainContent'

function Section({ id, eyebrow, title, intro, children, dark = false }) {
  return (
    <section id={id} className={dark ? 'bg-slate-950 px-4 py-14 text-white sm:py-16 lg:px-8' : 'px-4 py-14 sm:py-16 lg:px-8'}>
      <div className="mx-auto max-w-7xl">
        {eyebrow && <p className={dark ? 'text-sm font-bold uppercase tracking-wide text-amber-300' : 'text-sm font-bold uppercase tracking-wide text-amber-700'}>{eyebrow}</p>}
        {title && <h2 className={dark ? 'mt-2 max-w-4xl text-3xl font-black text-white md:text-4xl' : 'mt-2 max-w-4xl text-3xl font-black text-slate-950 md:text-4xl'}>{title}</h2>}
        {intro && <p className={dark ? 'mt-3 max-w-3xl leading-7 text-slate-300' : 'mt-3 max-w-3xl leading-7 text-slate-600'}>{intro}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [tab, setTab] = useState(0)
  const trust = ['Insurance Advisor Since 2007', '5 Language Support', 'Family + Business Protection', 'Claim & Renewal Support']
  const chips = ['Health Insurance', 'Life Insurance', 'Accidental Insurance', 'Vehicle Insurance', 'NRI Insurance', 'Parents Insurance', 'Retirement Plans', 'Travel Insurance', 'Business Insurance']
  const featuredProducts = featuredProductSlugs.map((slug) => productBySlug[slug])

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-16 pt-12 text-white sm:pt-16 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(251,191,36,.16),transparent_32%),linear-gradient(135deg,rgba(15,23,42,.4),rgba(2,6,23,1))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-amber-300">Trusted Since 2007 - For NRIs, Working Professionals & Entrepreneurs</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-7xl">All Your Insurance Needs.<br />One Trusted Advisor.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Get clear guidance on Health Insurance, Life Insurance, Accidental Insurance, Vehicle Insurance, NRI Insurance, Parents Insurance, Retirement Plans, Travel Insurance, and Business Insurance - all in one trusted place.</p>
            <p className="mt-4 text-xl font-black text-amber-200">With Dr. Maria Pramila</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#lead-forms">Book Review</CTAButton>
              <CTAButton variant="secondary" href={`https://wa.me/${placeholders.whatsapp}`}>WhatsApp Advisor</CTAButton>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">{chips.map((chip) => <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-slate-100">{chip}</span>)}</div>
            <div className="mt-8 grid gap-3 rounded-lg border border-white/10 bg-white/10 p-3 backdrop-blur sm:grid-cols-3">
              {['1. Pick Your Profile', '2. Open The Right Insurance Page', '3. Book Review Or WhatsApp'].map((step) => (
                <div key={step} className="rounded-lg bg-slate-950/60 px-4 py-3 text-sm font-bold text-amber-100">{step}</div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <img
              src={placeholders.advisorPhoto}
              alt="Dr. Maria Pramila, Insure To Secure insurance advisor"
              className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            />
            <div className="mt-5"><TrustBadges items={trust} /></div>
          </div>
        </div>
      </section>

      <Section id="audience-selector" eyebrow="Step 1" title="Step 1 — Start With Your Situation" intro="These Recommendation Tips Help You Choose The Right Starting Point.">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="grid gap-3">
            {audienceTabs.map((item, index) => (
              <button key={item.label} type="button" onClick={() => setTab(index)} className={`rounded-lg border p-4 text-left font-bold transition ${tab === index ? 'border-amber-400 bg-slate-950 text-white shadow-lg' : 'border-slate-200 bg-white text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md'}`}>{item.label}</button>
            ))}
          </div>
          <div className="rounded-lg bg-slate-950 p-6 text-white shadow-xl">
            <h3 className="text-2xl font-black">{audienceTabs[tab].label}</h3>
            <p className="mt-2 text-slate-300">Recommended products to review:</p>
            <div className="mt-5 flex flex-wrap gap-3">{audienceTabs[tab].products.map((product) => <span key={product} className="rounded-full bg-amber-300 px-4 py-2 text-sm font-bold text-slate-950">{product}</span>)}</div>
            <p className="mt-5 text-sm leading-6 text-slate-300">Final suitability is subject to policy terms, insurer underwriting, customer profile, and final policy wording.</p>
          </div>
        </div>
      </Section>

      <Section id="insurance-types" eyebrow="Step 2" title="Step 2 — Click Through">
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">{featuredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        <p className="mt-5 text-sm leading-6 text-slate-500">Coverage and suitability depend on insurer rules, policy terms, underwriting, and customer profile.</p>
      </Section>

      <Section id="wrong-insurance" dark eyebrow="Quick Risks" title="What Happens When Insurance Is Wrong?" intro="The Goal Is Not Fear. The Goal Is To Check Whether One Emergency Can Disturb Your Savings, Income, Parents, Vehicle, Or Business.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{riskStories.map(([title, body]) => <article key={title} className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur"><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{body}</p></article>)}</div>
        <p className="mt-5 text-sm text-slate-400">Examples Are For Awareness Only. Actual Coverage, Claims, Exclusions, And Costs Depend On Policy Terms And Insurer Rules.</p>
      </Section>

      <Section id="free-checkup" dark eyebrow="Free Insurance Health Check-Up" title="Free Insurance Health Check-Up"><HealthCheckCTA /></Section>

      <Section id="comparison" eyebrow="Human guidance" title="Advisor vs App vs Random Seller" intro="This positions advisory support as education-first, not pressure selling."><ComparisonTable rows={comparisonRows} /></Section>

      <Section id="why-advisor" dark eyebrow="Why advisor" title="Why Dr. Maria Pramila">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
            <img
              src={placeholders.advisorPhoto}
              alt="Dr. Maria Pramila, Insure To Secure insurance advisor"
              className="aspect-[4/3] w-full rounded-lg object-cover object-top"
            />
            <h3 className="mt-6 text-3xl font-black">Dr. Maria Pramila</h3>
            <p className="mt-2 text-amber-200">Chartered Wealth Manager - Prosperity Mentor - Author & Public Speaker - Insurance Advisor Since 2007</p>
            <p className="mt-5 text-xl leading-8">Apps compare premiums. Advisors compare what happens to your family when something goes wrong. That is the difference.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Right Information Before Buying', 'Existing Policy Review', 'Claim Assistance', 'Annual Review', 'NRI Support', 'In Your Language', 'Business Insurance Guidance', 'Family Protection Planning'].map((item) => <div key={item} className="rounded-lg bg-white p-5 font-bold text-slate-950 shadow-lg"><Sparkles className="mb-3 text-amber-500" />{item}</div>)}
          </div>
        </div>
      </Section>

      <Section id="how-it-works" eyebrow="Simple process" title="How It Works">
        <div className="grid gap-4 md:grid-cols-4">{['Free Insurance Health Check-Up', 'Choose Your Insurance Category', 'Book Review', 'Get Protection Guidance And Claim/Renewal Support'].map((step, index) => <div key={step} className="rounded-lg bg-white p-5 shadow-sm"><span className="text-4xl font-black text-amber-500">{index + 1}</span><h3 className="mt-3 font-bold text-slate-950">{step}</h3></div>)}</div>
      </Section>

      <Section id="lead-forms" dark eyebrow="Step 3" title="Book Review Or Business Consultation" intro="Short forms only.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_.55fr]">
          <LeadForm type="personal" />
          <LeadForm type="business" />
          <aside className="rounded-lg border border-white/10 bg-white/10 p-5 text-slate-100 shadow-xl backdrop-blur">
            <p className="text-sm font-black text-amber-200">Advisor Review Note</p>
            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-lg border border-white/15 bg-slate-950/50 p-4">Date: ________</div>
              <div className="rounded-lg border border-white/15 bg-slate-950/50 p-4">Page No: ________</div>
            </div>
          </aside>
        </div>
        <div className="mt-6"><DisclaimerBox /></div>
      </Section>

      <Section id="faqs" eyebrow="FAQs" title="Common Questions"><FAQAccordion faqs={faqs} /></Section>

      <Section id="seo-placeholders" title="Publishing Metadata Placeholders">
        <div className="grid gap-4 md:grid-cols-3">
          {[['Organization schema', 'Add official legal name, address, license, social profiles.'], ['FAQ schema', 'Verify final FAQ wording before publishing.'], ['Open Graph image', 'Replace with branded advisor or family protection image.']].map(([title, body]) => <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm text-slate-600">{body}</p></div>)}
        </div>
      </Section>
    </main>
  )
}
