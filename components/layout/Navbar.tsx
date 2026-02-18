import Link from 'next/link';
import Image from 'next/image';
import { mainNavLinks } from '@/data/navigation';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image src="/logo.svg" alt="Riosoto" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Riosoto</h1>
            <p className="text-xs text-orange-600 font-bold tracking-wide">DESDE 1946</p>
          </div>
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
