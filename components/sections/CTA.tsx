import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  eyebrow: 'Ready to Transform',
  heading: 'Unify Intelligence.\nAccelerate Innovation.',
  subtext: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  cta: { label: 'Get Started', href: '#contact' },
  secondary: { label: 'Explore Platform', href: '#features' },
}

export default function CTA() {
  return (
    <section className="py-section relative overflow-hidden bg-brand-950">
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary brand glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-500/15 blur-[160px] animate-pulse-glow" />
        {/* Secondary glow accent */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-500/8 blur-[120px]" />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-6">
            {CONTENT.eyebrow}
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-content-secondary">
              Unify Intelligence.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              Accelerate Innovation.
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-lg md:text-xl text-content-secondary/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary CTA with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/50 blur-2xl rounded-xl scale-110 opacity-60" />
              <a
                href={CONTENT.cta.href}
                className="relative px-10 py-5 font-body font-semibold text-lg bg-brand-500 text-white rounded-xl hover:bg-brand-700 transition-all ease-expo-out active:scale-[0.97] shadow-glow"
              >
                {CONTENT.cta.label}
              </a>
            </div>

            {/* Secondary CTA */}
            <a
              href={CONTENT.secondary.href}
              className="relative px-10 py-5 font-body font-medium text-base border border-white/20 text-content-primary rounded-xl hover:border-brand-500/50 hover:bg-white/[0.03] transition-all ease-expo-out group"
            >
              <span className="flex items-center gap-2">
                {CONTENT.secondary.label}
                <svg
                  className="w-4 h-4 text-content-secondary group-hover:text-brand-400 group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </AnimateIn>

        {/* Bottom trust indicators */}
        <AnimateIn delay={400}>
          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-content-muted mb-6">Trusted by forward-thinking organizations</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              {['Enterprise Ready', 'SOC 2 Certified', '99.9% Uptime', '24/7 Support'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-content-secondary font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
    </section>
  )
}