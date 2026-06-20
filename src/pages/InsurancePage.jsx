import { Navigate, useParams } from 'react-router-dom'
import InsurancePageLayout from '../components/InsurancePageLayout'
import { productBySlug } from '../data/insuranceProducts'

export default function InsurancePage() {
  const { slug } = useParams()
  const product = productBySlug[slug]
  if (!product) return <Navigate to="/" replace />
  return <InsurancePageLayout product={product} />
}

