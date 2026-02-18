import Link from 'next/link';
import Image from 'next/image';
import { mainNavLinks } from '@/data/navigation';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Riosoto" width={300} height={90} className="h-20 sm:h-24 w-auto" />
        </Link>
        <div className="flex gap-8 items-center">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-sm text-gray-500 hover:text-gray-900 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
