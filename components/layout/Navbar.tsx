import Link from 'next/link';
import Image from 'next/image';
import { mainNavLinks } from '@/data/navigation';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-amber-100/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="Riosoto" width={300} height={90} className="h-16 sm:h-20 w-auto" />
        </Link>
        <div className="flex gap-8 items-center">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-sm text-amber-900/60 hover:text-amber-900 transition-colors duration-200 hidden md:block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
