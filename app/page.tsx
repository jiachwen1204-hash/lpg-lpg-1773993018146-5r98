import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Automation Platform — Enhance Efficiency | ACE",
  description: "Unified AI platform combining automation, analytics, and intelligent workflows. Boost efficiency and drive scalable innovation. See how ACE transforms organizat",
  openGraph: {
    title: "AI Solutions Platform — Unify Intelligence. Accelerate Innov",
    description: "Unified AI platform combining automation, analytics, and intelligent workflows. Boost efficiency and drive scalable innovation. See how ACE transforms organizat",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Solutions Platform — Unify Intelligence. Accelerate Innov",
    description: "Unified AI platform combining automation, analytics, and intelligent workflows. Boost efficiency and drive scalable innovation. See how ACE transforms organizat",
  },
}

// @lpg: This is the 1-page layout — sections scroll vertically.
// Add section IDs, adjust order if needed, remove any unused sections.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
