import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  'NovaTech Solutions',
  'DataForge Systems',
  'CloudNexus',
  'Synthwave Labs',
  'Vertex Analytics',
  'Meridian AI',
]

const testimonials = [
  {
    quote: 'ACE transformed our decision-making process. Their AI platform gave us real-time insights that cut our analysis time by 70% and completely changed how we approach strategic planning.',
    author: 'Sarah Chen',
    role: 'Chief Technology Officer, NovaTech Solutions',
  },
  {
    quote: 'The integration was seamless and the results were immediate. We\'ve automated over 200 workflows and our team now focuses on innovation instead of repetitive tasks. This is what scalable intelligence looks like.',
    author: 'Marcus Williams',
    role: 'VP of Operations, DataForge Systems',
  },
  {
    quote: 'Finally, a platform that actually delivers on its promises. ACE unified our scattered tools into one intelligent system. Our efficiency metrics improved by 3x within the first quarter.',
    author: 'Elena Rodriguez',
    role: 'Head of Digital Innovation, CloudNexus',
  },
  {
    quote: 'The analytics capabilities are unlike anything we\'ve used before. Predictive insights that actually predict. Our leadership team now makes data-driven decisions with complete confidence.',
    author: 'James Park',
    role: 'CEO, Vertex Analytics',
  },
]

const stats = [
  { value: '10M+', label: 'Workflows Automated' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Platform Uptime' },
]

export default function SocialProof() {
  return (
    <section className="py-section bg-[#0f0f13] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} direction="up">
              <div className="text-center">
                <div className="font-heading font-black text-[clamp(2rem,4vw,3rem)] bg-clip-text text-transparent bg-gradient-to-b from-brand-400 to-brand-600 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm text-content-muted mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center mb-12">
          <p className="text-sm text-brand-400 uppercase tracking-widest font-medium">
            Trusted by Industry Leaders
          </p>
          <h2 className="font-heading font-black text-display-xl text-content-primary mt-4">
            Powering the Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-violet-400">Intelligent Enterprise</span>
          </h2>
        </AnimateIn>

        {/* Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-12 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-card border border-white/[0.08] bg-white/[0.03] text-content-secondary font-medium text-sm hover:border-brand-500/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 120} direction="up">
              <div className="group relative h-full p-8 rounded-card-lg border border-white/[0.08] bg-white/[0.02] hover:border-brand-500/40 hover:bg-white/[0.04] transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/60 transition-all duration-500" />
                
                {/* Quote icon */}
                <div className="text-4xl text-brand-500/20 font-serif mb-4">&ldquo;</div>
                
                <p className="text-content-secondary leading-relaxed mb-6">
                  {t.quote}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center text-content-inverse font-bold text-sm">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-content-primary">{t.author}</div>
                    <div className="text-sm text-content-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}