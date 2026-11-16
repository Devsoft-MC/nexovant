import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { brand, navLinks } from '@/data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-navy-900/80 py-3 shadow-lg shadow-navy-900/20 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center" onClick={closeMenu} aria-label={`${brand.name} home`}>
          <span className="inline-flex overflow-hidden rounded-md bg-white">
            <img
              src="/nexovant-logo-v2.png"
              alt={brand.name}
              width={160}
              height={44}
              className="h-10 w-36 object-contain sm:h-11 sm:w-40"
            />
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-navy-100 transition-colors hover:text-accent-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:-translate-y-0.5 hover:bg-primary-500"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-5 mt-4 space-y-1 rounded-2xl border border-white/10 bg-navy-900/90 p-4 backdrop-blur-xl sm:mx-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-navy-100 transition-colors hover:bg-white/5 hover:text-accent-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 block rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
