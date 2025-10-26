import Link from 'next/link';
import { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
  t: any;
}

export default function Footer({ locale, t }: FooterProps) {
  const baseUrl = locale === 'en' ? '' : `/${locale}`;

  const quickLinks = [
    { href: `${baseUrl}/`, label: t.nav.home },
    { href: `${baseUrl}/about/`, label: t.nav.about },
    { href: `${baseUrl}/projects/`, label: t.nav.projects },
    { href: `${baseUrl}/contact/`, label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href={`${baseUrl}/`} className="inline-block mb-6">
              <img
                src="/logo.svg"
                alt="Grand Prix India"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              {t.footer.tagline}
            </p>
            <div className="flex items-start space-x-3 text-gray-600 text-sm">
              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="leading-relaxed">
                148, Atlanta Tower, Jamnalal Bajaj Road<br />
                Nariman Point, Mumbai<br />
                Maharashtra, India - 400021
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">{t.footer.quick_links}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@grandprixindia.in" className="text-gray-600 hover:text-primary transition-colors duration-200 inline-flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@grandprixindia.in
                </a>
              </li>
              <li className="pt-4">
                <Link 
                  href={`${baseUrl}/contact/`}
                  className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium group"
                >
                  Get in Touch
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {t.footer.copyright}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
