import { productBySlug } from './insuranceProducts'

export const audienceTabs = [
  { label: 'I Am A Family | Parent', products: ['Health Insurance', 'Parents Insurance', 'Life Insurance', 'Accidental Insurance'] },
  { label: 'I Am An NRI', products: ['NRI Health Insurance', 'Parents Health Insurance', 'Senior Citizen Health Insurance', 'Retirement Plans', 'Travel Insurance'] },
  { label: 'I Am A Working Professional', products: ['Health Insurance', 'Life Insurance', 'Accidental Insurance', 'Retirement Plans'] },
  { label: 'I Want To Renew Or Change My Insurance', products: ['Health Insurance', 'Accidental Insurance', 'Life Insurance', 'Vehicle Insurance', 'Group Health Insurance'] },
  { label: 'I Am A Business Owner', products: ['Keyman Insurance', 'Employer-Employee Insurance', 'Group Health Insurance', 'Group Term Life Insurance', 'Group Accidental Insurance'] },
]

export const riskStories = [
  ['No Personal Health Cover', 'A job change can leave a family dependent on limited or temporary cover.'],
  ['Only Company Insurance', 'Employer cover is useful, but limits, dependents, and continuity should be reviewed.'],
  ['Wrong Life Cover Amount', 'A small cover may not support loans, education, and family income needs.'],
  ['No Accidental Cover', 'A hospital bill is one issue; accident-linked income interruption can be a separate risk.'],
  ['Parents Not Reviewed Separately', 'Age, medical history, co-pay, and waiting periods can affect the right plan choice.'],
  ['Vehicle Renewal Without Review', 'IDV, NCB, deductibles, and add-ons should be checked before paying.'],
  ['Business Without Key Person Planning', 'A key person gap can affect revenue, clients, and business continuity.'],
  ['Team Benefits Not Structured', 'Group Health Insurance, Group Term Life Insurance, and Group Accidental Insurance benefits need clean census and renewal planning.'],
]

export const comparisonRows = [
  ['Policy Explanation', 'Basic feature list', 'Often premium-focused', 'Education-first discussion'],
  ['Exclusions Explained', 'You must read alone', 'May be rushed', 'Discussed before buying'],
  ['Claim Support', 'Process support varies', 'Depends on seller', 'Human guidance and follow-up'],
  ['Annual Review', 'Usually self-managed', 'May not happen', 'Structured review conversation'],
  ['NRI Support', 'Limited context', 'May not understand family needs', 'India-focused family guidance'],
  ['Business Insurance Guidance', 'Limited routing', 'Product-led', 'Consultative needs mapping'],
  ['Language Comfort', 'Mostly app language', 'Varies', 'English, Hindi, Kannada, Tulu, Konkani'],
  ['Human Accountability', 'Platform-led', 'Individual varies', 'Named advisor relationship'],
]

export const faqs = [
  [
    'Should Parents Be Included In Family Floater?',
    'If Children Are Above 25 Years, Separate Health Insurance Is Usually Required For Them, Except In Certain Multi-Individual Insurance Plans. Parents Should Also Be Reviewed Separately Because Age, Medical History, Co-Pay, Waiting Periods, And Premiums Can Affect The Entire Family Floater. The Right Option Depends On The Insurer, Policy Terms, And Family Situation.',
  ],
  ['Do I Need Health Insurance If I Already Have Company Insurance?', 'Usually yes to review. Company Insurance may change with employment and may have limits. The right answer depends on your family, dependents, and policy terms.'],
  ['How Much Life Insurance Do I Need?', 'A suitable cover depends on income, liabilities, dependents, children’s education, home loan, existing assets, health, and underwriting.'],
  ['Is Accidental Insurance Different From Health Insurance?', 'Yes. Health Insurance handles eligible medical expenses, while Accidental Insurance can pay defined benefits for accident-linked death or disability depending on product terms.'],
  ['Can NRIs Buy Insurance In India?', 'Depending on plan, insurer, residence status, documentation, and underwriting, NRIs may be eligible for India-focused insurance options.'],
  ['What Is A Super Top-Up Plan?', 'It adds higher Health Insurance cover after a deductible is crossed. It should be paired carefully with base cover or employer cover.'],
  ['What Is IDV In Vehicle Insurance?', 'Insured Declared Value is a key Vehicle Insurance value used for own-damage cover calculations, subject to insurer rules.'],
  ['Why Should I Check Exclusions?', 'Exclusions define what is not covered. Knowing them before buying avoids unpleasant claim-time surprises.'],
  ['What Is Room Rent Limit?', 'It is a cap on eligible hospital room category or amount. It can affect final claim settlement.'],
  ['What Is Waiting Period?', 'A period during which specified conditions or benefits may not be payable, depending on policy wording.'],
  ['What Is Keyman Insurance?', 'A policy structure intended to manage financial impact if a critical business person is lost, subject to terms and legal or tax review.'],
  ['What Is Employer-Employee Insurance?', 'An employer-sponsored structure designed for employee protection or retention, depending on plan and documentation.'],
  ['What Is Group Health Insurance?', 'A Health Insurance arrangement offered by an employer or group to eligible members, usually reviewed annually.'],
  ['What Is Group Term Life Insurance?', 'A group Life Insurance arrangement for employees, generally renewed annually and priced for the group.'],
  ['What Is Group Accidental Insurance?', 'A group Accidental Insurance arrangement that can support accident-linked death or disability cover for employees or groups depending on product terms.'],
  [
    'Will You Help During Claim Time?',
    'Yes. If Your Policy Is Through Our Insurance Network Or Distributor Channel, We Can Definitely Help You With Claim Guidance, Subject To The Insurer’s Policy Terms, Required Documents, Approval Process, And Claim Rules. Claim Assistance Can Be Provided For Documentation, Hospital Coordination, Follow-Up, And Understanding The Claim Process.',
  ],
  ['Is The Consultation Free?', 'The review conversation can be free. Final advice depends on official policy documents, underwriting, and customer profile.'],
]

export const businessRoutes = ['keyman-insurance', 'employer-employee-insurance', 'group-health-insurance', 'group-term-life-insurance', 'group-accidental-insurance'].map((slug) => productBySlug[slug])
