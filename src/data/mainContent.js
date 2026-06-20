import { productBySlug } from './insuranceProducts'

export const audienceTabs = [
  { label: 'I am a Family / Parent', products: ['Health Insurance', 'Parents Health Insurance', 'Term Life Insurance', 'Personal Accident Insurance', 'Super Top-Up Health Insurance'] },
  { label: 'I am an NRI', products: ['NRI Health Insurance', "Parent's Health Insurance", 'Term Life Insurance', 'Personal Accident Insurance', 'Retirement Plans', 'Travel Insurance'] },
  { label: 'I am a Working Professional', products: ['Health Insurance', 'Term Life Insurance', 'Personal Accident Insurance', 'Retirement Plans'] },
  { label: 'I am a Business Owner', products: ['Keyman Insurance', 'Employer-Employee Insurance', 'Group Health Insurance', 'Group Term Life Insurance'] },
  { label: 'I want to review my existing policies', products: ['Policy Review', 'Portability', 'Claim Support'] },
  { label: 'I want to renew or change my vehicle insurance', products: ['Vehicle Insurance', 'Health Insurance', 'Term Insurance', 'Personal Accident Insurance'] },
]

export const riskStories = [
  ['No personal health cover', 'A job change can leave a family exposed exactly when stability is needed.'],
  ['Only company insurance', 'Employer cover is useful, but limits, dependents, and continuity need a review.'],
  ['Wrong term cover amount', 'A small cover can look comforting until loans, education, and living costs are added.'],
  ['No accident/disability cover', 'A hospital bill is one issue; income interruption can be the bigger issue.'],
  ['Parents not covered', 'Older policies may carry low sums insured, co-pay, or restrictions that surface later.'],
  ['Hidden policy exclusions', 'The cheapest policy can become expensive when exclusions are understood late.'],
  ['Business without keyman cover', 'A founder or key employee gap can affect revenue, clients, and continuity.'],
  ['Vehicle renewed without checking IDV/add-ons', 'Renewal is the moment to check IDV, NCB, deductibles, and useful add-ons.'],
]

export const comparisonRows = [
  ['Policy explanation', 'Basic feature list', 'Often premium-focused', 'Education-first discussion'],
  ['Exclusions explained', 'You must read alone', 'May be rushed', 'Discussed before buying'],
  ['Claim support', 'Process support varies', 'Depends on seller', 'Human guidance and follow-up'],
  ['Annual review', 'Usually self-managed', 'May not happen', 'Structured review conversation'],
  ['NRI support', 'Limited context', 'May not understand family needs', 'India-focused family guidance'],
  ['Business insurance guidance', 'Limited routing', 'Product-led', 'Consultative needs mapping'],
  ['Language comfort', 'Mostly app language', 'Varies', 'English, Hindi, Kannada, Tulu, Konkani'],
  ['Human accountability', 'Platform-led', 'Individual varies', 'Named advisor relationship'],
]

export const faqs = [
  ['Do I need health insurance if I already have company insurance?', 'Usually yes to review. Company insurance may change with employment and may have limits. The right answer depends on your family, dependents, and policy terms.'],
  ['How much term insurance do I need?', 'A common educational range is 10x-20x annual income, but final cover depends on liabilities, dependents, goals, existing assets, and underwriting.'],
  ['Is accident insurance different from health insurance?', 'Yes. Health insurance handles eligible medical expenses, while accident cover can pay defined benefits for accident-linked death or disability.'],
  ['Can NRIs buy insurance in India?', 'Depending on plan, insurer, residence status, documentation, and underwriting, NRIs may be eligible for India-focused policies.'],
  ['Should parents be included in family floater?', 'If children are above 25 years, a separate health insurance policy may be required for parents, except where a multi-individual insurance option is available. Final policy wording applies.'],
  ['What is a super top-up plan?', 'It adds higher cover after a deductible is crossed. It is useful when paired correctly with employer or base health cover.'],
  ['What is IDV in vehicle insurance?', 'Insured Declared Value is a key motor insurance value used for own-damage cover calculations, subject to insurer rules.'],
  ['Why should I check exclusions?', 'Exclusions define what is not covered. Knowing them before buying avoids unpleasant claim-time surprises.'],
  ['What is room rent limit?', 'It is a cap on eligible hospital room category or amount. It can affect final claim settlement.'],
  ['What is waiting period?', 'A period during which specified conditions or benefits may not be payable, depending on policy wording.'],
  ['What is keyman insurance?', 'A policy structure intended to manage financial impact if a critical business person is lost, subject to terms and legal/tax review.'],
  ['What is employer-employee insurance?', 'An employer-sponsored structure designed for employee protection or retention, depending on plan and documentation.'],
  ['What is group health insurance?', 'A health insurance arrangement offered by an employer or group to eligible members, usually reviewed annually.'],
  ['What is group term life?', 'A group life cover arrangement for employees, generally renewed annually and priced for the group.'],
  ['Will you help during claim time?', 'Yes. If your policy is with our insurance network or distributor support channel, we can help you during the claim process. Claim assistance can be provided, subject to policy terms and insurer process.'],
  ['Is the consultation free?', 'The review call can be free. Final advice depends on policy wording, underwriting, and customer profile.'],
]

export const businessRoutes = ['keyman-insurance', 'employer-employee-insurance', 'group-health-insurance', 'group-term-life-insurance'].map((slug) => productBySlug[slug])
