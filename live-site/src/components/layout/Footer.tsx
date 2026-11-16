import { brand, navLinks, services } from '@/data/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 text-navy-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <a href="#top" className="inline-flex overflow-hidden rounded-md bg-white" aria-label={`${brand.name} home`}>
            <img
              src="/nexovant-logo-v2.png"
              alt={brand.name}
              width={192}
              height={48}
              className="h-12 w-48 object-contain"
            />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-[1.5]">
            Zoho consulting, custom web and mobile applications, and business automation for companies built to grow.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-accent-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.title}><a href="#services" className="transition-colors hover:text-accent-300">{service.title}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Free consultation for every new project</li>
            <li>Remote-first, global delivery</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Software that moves your business forward.</p>
        </div>
      </div>
    </footer>
  );
}
