'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-6 px-4 md:px-16 lg:px-24 absolute top-0 left-0 right-0 z-50 bg-[#FBF6F1] bg-opacity-0">
      <div className="max-w-100% flex justify-around items-center">
        {/* Mobile Layout: Hamburger left, Title right */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            ></span>
          </button>

          {/* Title */}
          <Link href="/" className="text-2xl manufacturing-consent-regular text-primary-dark tracking-wide">
            Dr. Maya Reynolds, PsyD
          </Link>
        </div>

        {/* Desktop Layout: Title left, Nav right */}
        <Link href="/" className="w-full hidden md:block bg-opacity-50 text-3xl md:text-4xl manufacturing-consent-regular text-primary-dark tracking-wide">
          Dr. Maya Reynolds, PsyD
        </Link>
        <nav className="hidden md:flex gap-8 md:gap-12">
          <Link
            href="/blog"
            className={`text-text-secondary hover:text-primary-dark transition-colors font-light text-base md:text-lg ${pathname === '/blog' ? 'underline' : ''}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-text-secondary hover:text-primary-dark transition-colors font-light text-base md:text-lg ${pathname === '/contact' ? 'underline' : ''}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-12 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <Link
          href="/blog"
          onClick={toggleMenu}
          className={`text-text-secondary hover:text-primary-dark transition-colors font-light text-3xl ${pathname === '/blog' ? 'underline' : ''}`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          onClick={toggleMenu}
          className={`text-text-secondary hover:text-primary-dark transition-colors font-light text-3xl ${pathname === '/contact' ? 'underline' : ''}`}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
