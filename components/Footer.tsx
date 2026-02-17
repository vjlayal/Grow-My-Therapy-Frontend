import Link from 'next/link';
import AnimationWrapper from './AnimationWrapper';

export default function Footer() {
  return (
    <footer className="w-full ">
      {/* Top Section - Contact Info */}
      <div className="w-full bg-background py-16 md:py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          {/* Left - Lilac Template Info */}
          <AnimationWrapper direction="up" className="space-y-4">
            <h3 className="text-3xl lg:text-5xl font-light text-primary-dark">Dr. Maya Reynolds, PsyD</h3>
            <div className="text-text-secondary font-light text-base lg:text-lg space-y-1">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="text-text-secondary font-light text-base lg:text-lg space-y-1 mt-4">
              <p className="underline">contact@drmayareynolds.com</p>
              <p className="underline">(310) 555-0123</p>
            </div>
          </AnimationWrapper>

          {/* Center - Hours */}
          <AnimationWrapper direction="up" delay={0.2} className="space-y-4 flex flex-col items-center md:items-end md:justify-start">
            <h3 className="text-3xl lg:text-5xl font-light text-primary-dark">Hours</h3>
            <div className="text-text-secondary font-light text-base lg:text-lg space-y-1">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </AnimationWrapper>

          {/* Right - Find */}
          <AnimationWrapper direction="up" delay={0.4} className="space-y-4 flex flex-col items-center md:items-end md:justify-start">
            <h3 className="text-3xl lg:text-5xl font-light text-primary-dark">Find</h3>
            <div className="text-text-secondary font-light text-base lg:text-lg space-y-1">
              <Link href="/" className="block hover:text-primary-dark transition-colors underline">Home</Link>
              <Link href="/contact" className="block hover:text-primary-dark transition-colors underline">Contact</Link>
              <Link href="/blog" className="block hover:text-primary-dark transition-colors underline">Blog</Link>
            </div>
          </AnimationWrapper>
        </div>
      </div>

      {/* Bottom Section - Legal & Credits */}
      <div className="w-full bg-primary-light flex flex-col justify-center items-center py-12 md:py-16 px-8 md:px-16 lg:px-24 border-t-2 border-black">
        <AnimationWrapper duration={1.2} className="max-w-7xl mx-auto flex flex-col text-center justify-center items-center space-y-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-primary-dark text-xs md:text-sm font-bold uppercase tracking-wider">
            <Link href="#" className="hover:text-accent transition-colors underline">Privacy & Cookies Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors underline">Good Faith Estimate</Link>
            <Link href="#" className="hover:text-accent transition-colors underline">Terms & Conditions</Link>
            <Link href="#" className="hover:text-accent transition-colors underline">Disclaimer</Link>
          </div>

          {/* Credits */}
          <div className="text-primary-dark font-light text-xs md:text-sm pt-4">
            <p>Website Template Credits: <Link href="#" className="underline hover:text-accent transition-colors">Go Bloom Creative</Link></p>
          </div>

          {/* Copyright */}
          <div className="text-primary-dark font-light text-sm pt-8 md:pt-12">
            <p>All Rights Reserved © {new Date().getFullYear()} Maya Reynolds, PsyD.</p>
          </div>
        </AnimationWrapper>
      </div>
    </footer>
  );
}
