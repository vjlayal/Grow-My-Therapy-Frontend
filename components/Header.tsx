import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const logoVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const navVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * i + 0.5, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <header className="w-full py-6 px-4 md:px-16 lg:px-24 absolute top-0 left-0 right-0 z-50 bg-[#FBF6F1] bg-opacity-0">
      <div className="max-w-100% flex justify-between items-center">
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <Link href="/" className="text-2xl manufacturing-consent-regular text-primary-dark tracking-wide">
              Dr. Maya Reynolds, PsyD
            </Link>
          </motion.div>
        </div>

        {/* Desktop Layout: Title left, Nav right */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="w-full hidden md:block"
        >
          <Link href="/" className="text-3xl md:text-4xl manufacturing-consent-regular text-primary-dark tracking-wide">
            Dr. Maya Reynolds, PsyD
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-8 md:gap-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              <Link
                href={link.href}
                className={`text-text-secondary hover:text-primary-dark transition-colors font-light text-base md:text-lg ${pathname === link.href ? 'underline' : ''}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
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
