import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Integrated AI Solutions',
  headline: 'Unify Intelligence.',
  highlight: 'Accelerate Innovation.',
  subline: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  cta: { label: 'Get Started', href: '#contact' },
  secondary: { label: 'Explore Platform', href: '#features' },
  stats: [
    { value: 'AI-Powered', label: 'Automation Engine' },
    { value: 'Real-Time', label: 'Analytics Dashboard' },
    { value: 'Scalable', label: 'Digital Innovation' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-base pt-nav"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-brand-500/15 blur-[180px] animate-float pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-700/10 blur-[150px] animate-float [animation-delay:3s] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-500/5 blur-[200px] pointer-events-none" />
      </div>

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-neutral-200) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, var(--color-neutral-950), transparent)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/[0.03] text-sm text-content-secondary mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] text-content-primary mb-6">
                {CONTENT.headline}<br />
                <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-content-secondary/80 mb-10 leading-relaxed font-light">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-card scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative px-8 py-4 font-body font-medium bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 transition-all ease-expo-out active:scale-[0.97] cursor-pointer"
                  >
                    {CONTENT.cta.label}
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-medium border border-white/15 text-content-primary rounded-card hover:border-brand-500 hover:text-brand-500 transition-all ease-expo-out cursor-pointer"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-white/8">
                {CONTENT.stats.map(stat => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="font-heading font-black text-2xl text-brand-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-content-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating UI mockup */}
          <AnimateIn delay={200} direction="left" className="hidden lg:block relative">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="rounded-card-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 shadow-card-lg">
                <div className="flex items-center justify-between mb-8">
                  <span className="label-sm text-content-muted">AI Workflow Dashboard</span>
                  <span className="text-xs text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* Fake analytics chart */}
                <div className="flex items-end gap-1.5 h-28 mb-8">
                  {[35, 55, 45, 75, 60, 85, 70, 90, 75, 95, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, var(--color-brand-400), var(--color-brand-600))`,
                        opacity: i === 11 ? 1 : 0.3 + (i / 11) * 0.6,
                      }}
                    />
                  ))}
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Automation', value: '94%', trend: '+12%', colorClass: 'text-brand-400' },
                    { label: 'Analytics', value: 'Real-Time', trend: 'Live', colorClass: 'text-brand-500' },
                    { label: 'Workflows', value: '2.4k', trend: 'Active', colorClass: 'text-brand-600' },
                  ].map(m => (
                    <div key={m.label} className="rounded-card bg-white/[0.03] p-4 border border-white/5">
                      <div className="label-sm text-content-muted mb-1">{m.label}</div>
                      <div className="font-heading font-bold text-lg text-content-primary">{m.value}</div>
                      <div className={`text-xs mt-1 ${m.colorClass}`}>{m.trend}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-6 -right-6 rounded-card bg-surface-raised border border-white/10 p-4 flex items-center gap-3 animate-float shadow-card">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <span className="text-brand-500 text-lg">⚡</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-content-primary">AI Processing</div>
                  <div className="text-xs text-brand-500">98.2% Accuracy</div>
                </div>
              </div>

              {/* Floating badge - bottom left */}
              <div className="absolute -bottom-4 -left-6 rounded-card bg-surface-raised border border-white/10 p-4 flex items-center gap-3 animate-float [animation-delay:2s] shadow-card">
                <span className="text-2xl">🔗</span>
                <div>
                  <div className="text-xs font-semibold text-content-primary">Integrations</div>
                  <div className="text-xs text-content-muted">50+ Connected</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Gradient line divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  )
}