import { useState } from 'react'

const baseInput = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200'

function Field({ label, name, type = 'text', required = true, children, helper, pattern, inputMode, autoComplete }) {
  return (
    <label htmlFor={name} className="block text-sm font-semibold text-slate-800">
      {label}{required && <span className="text-amber-700"> *</span>}
      {children || <input id={name} className={baseInput} name={name} type={type} required={required} pattern={pattern} inputMode={inputMode} autoComplete={autoComplete} aria-describedby={helper ? `${name}-help` : undefined} />}
      {helper && <span id={`${name}-help`} className="mt-1 block text-xs font-normal text-slate-500">{helper}</span>}
    </label>
  )
}

function Select({ name, options }) {
  return (
    <select id={name} name={name} required className={baseInput}>
      <option value="">Select</option>
      {options.map((option) => <option key={option}>{option}</option>)}
    </select>
  )
}

export default function LeadForm({ type = 'personal', compact = false }) {
  const [sent, setSent] = useState(false)
  const [consent, setConsent] = useState(false)
  const isBusiness = type === 'business'
  function submit(event) {
    event.preventDefault()
    if (!consent) return
    // Later integrations: Calendly [PASTE_CALENDLY_LINK_HERE], WhatsApp [PASTE_WHATSAPP_NUMBER_HERE],
    // Google Sheets [ADD_GOOGLE_SHEETS_WEBHOOK_LATER], CRM endpoint, or Supabase insert can be added here.
    setSent(true)
  }
  if (sent) {
    return <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 font-semibold text-emerald-900">Thank you. Your request has been received. Our team will contact you soon.</div>
  }
  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" noValidate={false}>
      <h3 className="text-xl font-black text-slate-950">{isBusiness ? 'Business Consultation' : 'Book Review'}</h3>
      <p className="mt-2 text-sm text-slate-600">Share the essentials. Our team can collect detailed policy documents later.</p>
      <div className={`mt-5 grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <Field label="Full Name" name={`${type}-name`} autoComplete="name" />
        {isBusiness && <Field label="Business Name" name="business-name" />}
        <Field label="Mobile / WhatsApp" name={`${type}-mobile`} type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+()\\-\\s]{8,18}" helper="Use digits with country code if outside India." />
        <Field label="Email" name={`${type}-email`} type="email" autoComplete="email" />
        {!isBusiness && <Field label="City" name="city" autoComplete="address-level2" />}
        {!isBusiness && <Field label="Are you an NRI?" name="nri"><Select name="nri" options={['No', 'NRI Gulf', 'NRI USA/UK/Other']} /></Field>}
        {isBusiness && <Field label="Number Of Employees" name="employees"><Select name="employees" options={['1-5', '6-25', '26-100', '100+']} /></Field>}
        <Field label={isBusiness ? 'Insurance Of Interest' : 'Insurance I Need Help With'} name="interest">
          <Select name="interest" options={isBusiness ? ['Keyman Insurance', 'Employer-Employee Insurance', 'Group Health Insurance', 'Group Term Life Insurance', 'Group Accidental Insurance', 'All Of The Above'] : ['Health Insurance', 'NRI Health Insurance', 'Parents Insurance', 'Senior Citizen Health Insurance', 'Life Insurance', 'Accidental Insurance', 'Vehicle Insurance', 'Complete Review']} />
        </Field>
        <Field label="Preferred Language" name="language"><Select name="language" options={['English', 'Hindi', 'Kannada', 'Tulu', 'Konkani']} /></Field>
        {!isBusiness && <Field label="Preferred Contact Method" name="contact"><Select name="contact" options={['Call', 'WhatsApp', 'Email']} /></Field>}
      </div>
      <label htmlFor={`${type}-consent`} className="mt-5 flex gap-3 text-sm text-slate-700">
        <input id={`${type}-consent`} type="checkbox" className="mt-1 size-4 accent-amber-500" checked={consent} onChange={(e) => setConsent(e.target.checked)} required aria-describedby={`${type}-consent-error`} />
        I consent to be contacted by Insure To Secure by Dr. Maria Pramila for education and consultation. I understand coverage, waiting periods, exclusions, premiums and claims process may vary by insurer and policy.
      </label>
      {!consent && <p id={`${type}-consent-error`} className="mt-2 text-xs text-slate-500">Consent is required before submitting.</p>}
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(251,191,36,.28)] transition hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        {isBusiness ? 'Submit Business Consultation' : 'Book Review'}
      </button>
    </form>
  )
}
