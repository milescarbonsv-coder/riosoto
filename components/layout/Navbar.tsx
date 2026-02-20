import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { MobileMenu } from '@/components/layout/MobileMenu';

const navKeys = ['home', 'products', 'blog', 'recipes', 'about'] as const;
const navHrefs: Record<string, string> = {
  home: '/',
  products: '/products',
  blog: '/blog',
  recipes: '/recipes',
  about: '/about',
};

export async function Navbar() {
  const t = await getTranslations('nav');

  const navItems = navKeys.map((key) => ({
    key,
    href: navHrefs[key],
    label: t(key),
  }));

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-1 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0 -my-4 ml-2 sm:ml-4">
          <Image src="/logo.svg" alt="RioSoto" width={300} height={90} className="h-28 sm:h-32 w-auto" />
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="font-medium text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 ml-8">
            <LanguageSwitcher />
            <span className="text-slate-200 text-xs">|</span>
            <Link
              href="/contact"
              className="bg-rojo text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300"
            >
              {t('contact')}
            </Link>
          </div>
          <MobileMenu navItems={navItems} contactLabel={t('contact')} />
        </div>
      </div>
    </nav>
  );
}
