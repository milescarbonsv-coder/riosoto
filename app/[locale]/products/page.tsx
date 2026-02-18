'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { products } from '@/data/products';
import type { ProductCategory, FlavorProduct, OtherProduct } from '@/data/types';
import { CTASection } from '@/components/ui/CTASection';
import { Link } from '@/i18n/navigation';

export default function Products() {
  const t = useTranslations('products');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('paletas');
  const currentProducts = products[activeCategory] as (FlavorProduct | OtherProduct)[];

  const categoryTabs: { key: ProductCategory; label: string }[] = [
    { key: 'paletas', label: t('categories.paletas') },
    { key: 'conos', label: t('categories.conos') },
    { key: 'individual', label: t('categories.individual') },
    { key: 'bulk', label: t('categories.bulk') },
  ];

  return (
    <main className="bg-warm min-h-screen">
      {/* Clean Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
          <div className="text-center mb-12">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-3">
              {t('headerTag')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              {t('headerTitle')}
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              {t('headerDescription')}
            </p>
          </div>

          {/* Underline-Style Category Nav (Jeni's pattern) */}
          <nav className="flex justify-center gap-1 sm:gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`relative px-5 sm:px-8 py-4 font-semibold text-sm transition-all duration-300 ${
                  activeCategory === tab.key
                    ? 'text-rojo'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab.label}
                {/* Active underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-full transition-all duration-300 ${
                    activeCategory === tab.key
                      ? 'bg-rojo'
                      : 'bg-transparent'
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className={`grid gap-6 md:gap-8 ${
          activeCategory === 'paletas'
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        }`}>
          {activeCategory === 'paletas' ? (
            (currentProducts as FlavorProduct[]).map((product) => (
              <div key={product.name} className="group cursor-pointer">
                {/* Square Card with Product */}
                <div className={`aspect-square bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/10 group-hover:-translate-y-1`}>
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="w-[70%] h-[70%] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-5xl">{product.icon}</span>
                  )}
                </div>
                {/* Product Info Below Card */}
                <div className="mt-3 text-center">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{product.name}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{product.desc}</p>
                  {product.price && (
                    <p className="text-rojo font-bold text-sm mt-1">{product.price}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            (currentProducts as OtherProduct[]).map((product) => (
              <div key={product.name} className="group cursor-pointer">
                {/* Square Card for Other Products */}
                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden border border-slate-100 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/10 group-hover:-translate-y-1">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={160}
                      height={160}
                      className="w-[65%] h-[65%] object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-6xl">{product.emoji}</span>
                  )}
                </div>
                {/* Product Info Below Card */}
                <div className="mt-3 text-center">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{product.name}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{t(`productDescriptions.${product.name.replace(/\./g, '')}`)}</p>
                  {product.price && (
                    <p className="text-rojo font-bold text-sm mt-1">{product.price}</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Where to Buy — clean card style */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl p-10 md:p-14 border border-slate-100 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-rojo/5 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <div>
              <h3 className="font-bold text-2xl md:text-3xl text-slate-900 mb-3">{t('whereToBuyTitle')}</h3>
              <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">{t('whereToBuyDescription')}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-rojo text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300 whitespace-nowrap"
              >
                {t('whereToBuyCTA')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-slate-50 transition-all duration-300 whitespace-nowrap"
              >
                {t('whereToBuySecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor CTA */}
      <CTASection
        subtitle={t('ctaSubtitle')}
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        actions={[
          { href: '/contact', label: t('ctaAction'), className: 'bg-white text-slate-900 hover:shadow-xl' },
        ]}
      />
    </main>
  );
}
