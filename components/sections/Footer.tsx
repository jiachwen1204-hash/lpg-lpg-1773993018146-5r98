import Link from 'next/link'
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const BRAND = {
  name:        'ACE',
  tagline:     'Unify Intelligence. Accelerate Innovation.',
  description: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  email:       'jiachwen99@gmail.com',
  address:     'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
  cta:         'Get Started',
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

const legal = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

const social = [
  { label: 'Twitter',  href: '#', icon: Twitter  },
  { label: 'LinkedIn', href: '#', icon: Linkedin  },
  { label: 'GitHub',   href: '#', icon: Github    },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f0f13] border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-500/8 blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <img 
                src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773993015866-Customer%20List%202023-12-07%2016%2027%2058.jpg" 
                alt="ACE logo" 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="mt-4 text-sm text-content-secondary max-w-md leading-relaxed">
              {BRAND.description}
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {social.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center text-content-muted hover:text-brand-500 hover:bg-brand-500/10 hover:border-brand-500/30 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary mb-4">Navigation</h3>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a 
                    href={l.href} 
                    className="text-sm text-content-muted hover:text-brand-500 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-sm text-content-muted hover:text-brand-500 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-content-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{BRAND.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="relative py-8 mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-brand-500/5 to-brand-500/10 rounded-2xl" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6">
            <div>
              <h3 className="font-heading font-bold text-xl text-content-primary">
                Ready to accelerate?
              </h3>
              <p className="text-sm text-content-muted mt-1">
                Start transforming your workflows today.
              </p>
            </div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-content-inverse font-medium hover:bg-brand-700 transition-all duration-300 group"
            >
              <span className="absolute inset-0 bg-brand-400/40 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">{BRAND.cta}</span>
              <svg className="w-4 h-4 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-content-muted">
              © {year} {BRAND.name}. All rights reserved.
            </div>
            <ul className="flex items-center gap-6">
              {legal.map(l => (
                <li key={l.href}>
                  <Link 
                    href={l.href} 
                    className="text-sm text-content-muted hover:text-brand-500 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}