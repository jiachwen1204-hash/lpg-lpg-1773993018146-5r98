import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Brain, Zap, Shield } from 'lucide-react'

const CONTENT = {
  label: 'About ACE',
  heading: 'Unify Intelligence.',
  headingAccent: 'Accelerate Innovation.',
  description: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  pillars: [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      desc: 'Leveraging cutting-edge machine learning to transform raw data into actionable insights.',
    },
    {
      icon: Zap,
      title: 'Seamless Automation',
      desc: 'Streamlining complex workflows to reduce manual effort and accelerate business processes.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      desc: 'Built with robust security protocols to protect your most sensitive business data.',
    },
  ],
  stats: [
    { value: '500+', label: 'Organizations Empowered' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '24/7', label: 'Intelligent Support' },
  ],
  cta: { label: 'Get Started', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section-lg overflow-hidden bg-surface-primary">
      {/* Ambient glow orbs */}
      <div className="absolute top-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full bg-brand-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-500/8 blur-[150px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {CONTENT.label}
            </span>
          </AnimateIn>
          
          <AnimateIn delay={100}>
            <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] mb-6">
              <span className="text-content-primary">{CONTENT.heading}</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-cyan-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">
                {CONTENT.headingAccent}
              </span>
            </h2>
          </AnimateIn>
          
          <AnimateIn delay={200}>
            <p className="text-lg text-content-secondary/80 leading-relaxed max-w-2xl font-body">
              {CONTENT.description}
            </p>
          </AnimateIn>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONTENT.pillars.map((pillar, i) => (
            <AnimateIn key={pillar.title} delay={i * 100}>
              <div className="group relative p-6 rounded-card-lg border border-white/8 bg-white/[0.03] hover:border-brand-500/30 hover:bg-white/[0.06] transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-300 rounded-card-lg" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <pillar.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-content-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-content-secondary/70 leading-relaxed font-body">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Stats Row */}
        <AnimateIn delay={300}>
          <div className="relative rounded-card-lg border border-white/8 bg-white/[0.02] p-8">
            {/* Subtle top accent */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CONTENT.stats.map((stat, i) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-content-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-content-muted font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn delay={400}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-brand-500/30 blur-2xl rounded-pill scale-110" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-pill hover:bg-brand-600 transition-all duration-300 shadow-glow"
              >
                {CONTENT.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <a
              href="mailto:jiachwen99@gmail.com"
              className="text-sm text-content-secondary hover:text-brand-400 transition-colors duration-300 font-body"
            >
              Contact us directly →
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}