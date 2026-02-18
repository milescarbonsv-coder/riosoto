import Link from 'next/link';
import Image from 'next/image';
import { mainNavLinks } from '@/data/navigation';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Riosoto" width={160} height={48} className="h-10 sm:h-12 w-auto" />
        </Link>
        <div className="flex gap-8 items-center">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-gray-700 hover:text-orange-500 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
