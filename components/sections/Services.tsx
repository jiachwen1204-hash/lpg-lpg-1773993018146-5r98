import AnimateIn from '@/components/ui/AnimateIn'
import { Cpu, BarChart3, Workflow, Globe, Zap } from 'lucide-react'

interface ServiceItem {
  icon: React.ElementType
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: Cpu,
    title: 'AI-Powered Automation',
    description: 'Streamline complex processes with intelligent automation that learns and adapts to your workflows, reducing manual effort and accelerating operational efficiency.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Transform raw data into actionable insights with machine learning models that forecast trends, identify patterns, and optimize decision-making across your organization.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflows',
    description: 'Unify disconnected systems into cohesive workflows that automatically route, prioritize, and execute based on real-time conditions and business rules.',
  },
  {
    icon: Globe,
    title: 'Scalable Integration',
    description: 'Connect your existing tools and data sources through a unified API layer that seamlessly scales with your business needs and expands capabilities.',
  },
  {
    icon: Zap,
    title: 'Real-Time Intelligence',
    description: 'Deploy AI models that process and respond to events instantly, enabling proactive operations and immediate actionable responses at scale.',
  },
]

const HEADING = 'Platform Capabilities'
const SUBTEXT = 'Unify Intelligence. Accelerate Innovation. Our integrated AI solutions unify automation, analytics, and intelligent workflows into a centralized platform that empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-[#0f0f13] relative overflow-hidden">
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }} />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '256px 256px',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-3">
            What We Do
          </p>
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-6">
            {HEADING}
          </h2>
          <p className="max-w-2xl mx-auto text-content-secondary text-lg leading-relaxed">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 80} direction="up">
              <div className="group relative h-full p-8 rounded-card-lg border border-white/8 bg-white/[0.03] hover:border-brand-500/40 hover:bg-white/[0.06] transition-all duration-300 ease-expo-out overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-300 rounded-card-lg" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <svc.icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}