import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTAButton({ children, to, href, variant = 'primary', className = '', icon = true, ...props }) {
  const styles =
    variant === 'secondary'
      ? 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
      : variant === 'light'
        ? 'bg-white text-slate-950 hover:bg-amber-50'
        : 'bg-amber-400 text-slate-950 shadow-[0_0_28px_rgba(251,191,36,.28)] hover:bg-amber-300'
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${styles} ${className}`
  if (to) {
    return <Link to={to} className={cls} {...props}>{children}{icon && <ArrowRight size={16} />}</Link>
  }
  return <a href={href || '#lead-forms'} className={cls} {...props}>{children}{icon && <ArrowRight size={16} />}</a>
}

