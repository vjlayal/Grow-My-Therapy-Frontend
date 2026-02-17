import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full ">
      {/* Top Section - Contact Info */}
      <div className="w-full bg-background py-12 px-8 md:px-16 lg:px-24 h-[400px]">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Lilac Template Info */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-dark">Dr. Maya Reynolds, PsyD</h3>
            <div className="text-text-secondary font-light text-sm md:text-base lg:text-md space-y-1">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="text-text-secondary font-light text-sm md:text-base lg:text-md space-y-1 mt-4 underline">
              <p>contact@drmayareynolds.com</p>
              <p className="underline">(310) 555-0123</p>
            </div>
          </div>

          {/* Center - Hours */}
          <div className="space-y-4 flex flex-col items-end justify-start">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-dark">Hours</h3>
            <div className="text-text-secondary font-light text-sm md:text-base lg:text-md space-y-1">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Right - Find */}
          <div className="space-y-4 flex flex-col items-end justify-start">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-dark">Find</h3>
            <div className="text-text-secondary font-light text-sm md:text-base lg:text-md space-y-1">
              <Link href="/" className="block hover:text-primary-dark transition-colors underline">Home</Link>
              <Link href="/contact" className="block hover:text-primary-dark transition-colors underline">Contact</Link>
              <Link href="/blog" className="block hover:text-primary-dark transition-colors underline">Blog</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal & Credits */}
      <div className="w-full h-[300px] bg-primary-light flex flex-col justify-center items-center py-8 px-8 md:px-16 lg:px-24 border-t-2 border-black">
        <div className="max-w-7xl mx-auto flex flex-col text-center justify-center items-center space-y-4">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-primary-dark text-xs md:text-sm lg:text-base font-bold">
            <Link href="#" className="hover:text-accent transition-colors underline">Privacy & Cookies Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors underline">Good Faith Estimate</Link>
            <Link href="#" className="hover:text-accent transition-colors underline">Website Terms & Conditions</Link>
            <Link href="#" className="hover:text-accent transition-colors underline">Disclaimer</Link>
          </div>

          {/* Credits */}
          <div className="text-primary-dark font-light text-xs md:text-sm">
            <p>Website Template Credits: <Link href="#" className="underline hover:text-accent transition-colors">Go Bloom Creative</Link></p>
          </div>

          {/* Copyright */}
          <div className="text-primary-dark font-light text-xs md:text-sm lg:text-base pt-16">
            <p>All Rights Reserved © {new Date().getFullYear()} Your Business Name Here, LLC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
