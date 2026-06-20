import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import CTAButton from './CTAButton'
import { placeholders } from '../data/insuranceProducts'

const questions = [
  ['Do you have a personal health insurance policy, not just employer cover?', ['No', 'Not sure', 'Yes']],
  ['What is your total family health cover?', ['Below 5 lakh', '5-10 lakh', 'Above 10 lakh']],
  ['Do you have a pure term life insurance policy?', ['No', 'Not sure', 'Yes']],
  ['Do you have personal accident and disability cover?', ['No', 'Not sure', 'Yes']],
  ['Are your parents covered properly?', ['No', 'Not sure', 'Yes']],
  ['When did you last review your policies?', ['Never', 'Over 2 years ago', 'Within 12 months']],
  ['Do you know what your policy does NOT cover?', ['No', 'Somewhat', 'Yes']],
]

function outcome(score) {
  if (score <= 4) return ['High Risk', 'Immediate Review Needed']
  if (score <= 9) return ['Moderate Risk', 'Gaps Need Fixing']
  return ['Good Coverage', "Let's Optimise It"]
}

export default function Quiz() {
  const [answers, setAnswers] = useState({})
  const done = Object.keys(answers).length === questions.length
  const score = Object.values(answers).reduce((sum, value) => sum + value, 0)
  const [level, message] = outcome(score)
  // Later: send quiz answers to Google Sheets, CRM, Supabase, or WhatsApp prefill.
  return (
    <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5">
      <div className="grid gap-5 lg:grid-cols-2">
        {questions.map(([question, options], qIndex) => (
          <div
            key={question}
            className="rounded-lg bg-white p-5 text-slate-950 shadow-sm"
            role="radiogroup"
            aria-labelledby={`quiz-question-${qIndex}`}
          >
            <h3 id={`quiz-question-${qIndex}`} className="text-base font-black leading-6 text-slate-950">
              {qIndex + 1}. {question}
            </h3>
            <div className="mt-3 grid gap-2">
              {options.map((option, optionIndex) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm transition hover:border-amber-400">
                  <input type="radio" name={`q-${qIndex}`} className="accent-amber-500" checked={answers[qIndex] === optionIndex} onChange={() => setAnswers({ ...answers, [qIndex]: optionIndex })} />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg bg-slate-950 p-5 text-white">
        <p className="text-sm text-amber-200">Quiz score: {score}/14</p>
        <h3 className="mt-1 text-2xl font-black">{done ? `${level} - ${message}` : 'Answer all questions to see your result'}</h3>
        {done && (
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#lead-forms">Book Free Review</CTAButton>
            <CTAButton variant="secondary" href={`https://wa.me/${placeholders.whatsapp}`}><MessageCircle size={16} /> WhatsApp Advisor</CTAButton>
          </div>
        )}
      </div>
    </div>
  )
}
