import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { placeholders, productBySlug } from './data/insuranceProducts'
import HomePage from './pages/HomePage'
import InsurancePage from './pages/InsurancePage'

function Metadata() {
  const location = useLocation()
  useEffect(() => {
    const slug = location.pathname.replace('/', '')
    const product = productBySlug[slug]
    const title = product?.title || 'All Your Insurance Needs. One Trusted Advisor. | Insure to Secure by Dr. Maria Pramila'
    const description = product?.meta || 'India-focused insurance advisory for health, life, accident, vehicle, NRI, and business insurance reviews.'
    document.title = title
    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }
    const setLink = (rel, href) => {
      let tag = document.querySelector(`link[rel="${rel}"]`)
      if (!tag) {
        tag = document.createElement('link')
        tag.setAttribute('rel', rel)
        document.head.appendChild(tag)
      }
      tag.setAttribute('href', href)
    }
    const setJsonLd = (id, payload) => {
      let tag = document.getElementById(id)
      if (!tag) {
        tag = document.createElement('script')
        tag.id = id
        tag.type = 'application/ld+json'
        document.head.appendChild(tag)
      }
      tag.textContent = JSON.stringify(payload)
    }
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:image', placeholders.ogImage, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setLink('canonical', `[ADD_CANONICAL_DOMAIN_HERE]${location.pathname}`)
    setJsonLd('organization-schema-placeholder', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Insure to Secure by Dr. Maria Pramila',
      placeholder: placeholders.organizationSchema,
    })
    setJsonLd('breadcrumb-schema-placeholder', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      placeholder: placeholders.breadcrumbSchema,
      page: product?.name || 'All Insurance Types',
    })
    setJsonLd('faq-schema-placeholder', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      placeholder: placeholders.faqSchema,
      page: product?.name || 'Insure to Secure home page',
    })
  }, [location.pathname])
  return null
}

function ScrollToHash() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }, [location.pathname, location.hash])
  return null
}

export default function App() {
  return (
    <>
      <Metadata />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<InsurancePage />} />
      </Routes>
      <Footer />
    </>
  )
}
