```react
'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 50, suffix: '+', label: 'Enterprise Clients', description: 'Organizations unified' },
  { value: 2500000, suffix: '', label: 'Data Points', description: 'Processed daily', compact: '2.5M+' },
  { value: 87, suffix: '%', label: 'Efficiency Gains', description: 'Average improvement' },
  { value: 99.9, suffix: '%', label: 'Uptime', description: 'Platform reliability', decimal: true },
]

function CountUp({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = eased * target
        setCount(decimal ? Math.round(current * 10) / 10 : Math.round(current))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimal])

  const displayValue = decimal ? count.toFixed(1) : count
  return <span ref={ref}>{displayValue}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-section-lg overflow-hidden bg-surface-base">
      {/* Background depth layers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
        <div className="absolute top-0 inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Platform Performance
          </span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-content-primary">
            Numbers That Define{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 bg-[length:200%_auto]">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-content-secondary/70 mt-4 max-w-xl mx-auto">
            Our integrated AI platform delivers measurable outcomes across automation, analytics, and intelligent workflows.
          </p>
        </AnimateIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="relative group text-center p-6 rounded-card-lg bg-white/[0.02] border border-white/8 hover:border-brand-500/40 transition-all duration-500">
                {/* Top accent line on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/60 transition-all duration-500" />
                
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.04] transition-colors duration-500 rounded-card-lg" />
                
                <div className="relative">
                  <div className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-br from-brand-400 to-brand-500 mb-3">
                    <CountUp target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                  </div>
                  <div className="font-body font-semibold text-lg text-content-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-content-muted/80">
                    {stat.description}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-border/50 to-transparent" />
    </section>
  )
}
```