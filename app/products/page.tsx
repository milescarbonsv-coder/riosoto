'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products, productCategoryTabs } from '@/data/products';
import type { ProductCategory, FlavorProduct, OtherProduct } from '@/data/types';
import { PageHeader } from '@/components/ui/PageHeader';
import { CategoryTabs } from '@/components/ui/CategoryTabs';
import { FlavorCard } from '@/components/ui/FlavorCard';
import { CTASection } from '@/components/ui/CTASection';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('paletas');
  const currentProducts = products[activeCategory] as (FlavorProduct | OtherProduct)[];

  return (
    <main>
      <PageHeader
        tag="CATÁLOGO COMPLETO"
        title="Nuestros Productos"
        description="34 productos en 4 categorías. Desde paletas hasta presentaciones para tu negocio."
        centered
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <CategoryTabs
          tabs={productCategoryTabs}
          activeKey={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Products Grid */}
        <div className={`grid gap-5 mb-16 ${
          activeCategory === 'paletas'
            ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {activeCategory === 'paletas' ? (
            (currentProducts as FlavorProduct[]).map((product) => (
              <FlavorCard key={product.name} variant="full" flavor={product} />
            ))
          ) : (
            (currentProducts as OtherProduct[]).map((product) => (
              <div
                key={product.name}
                className="bg-white p-6 rounded-3xl border border-slate-200/50 product-card text-center cursor-pointer"
              >
                {product.image ? (
                  <div className="h-32 flex items-center justify-center mb-4">
                    <Image src={product.image} alt={product.name} width={120} height={120} className="product-image h-28 w-auto object-contain" />
                  </div>
                ) : (
                  <div className="text-5xl mb-4">{product.emoji}</div>
                )}
                <h3 className="font-bold text-slate-900 text-base mb-1">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-2">{product.desc}</p>
                {product.price && (
                  <span className="inline-block bg-rojo/10 text-rojo font-bold text-sm px-3 py-1 rounded-full">{product.price}</span>
                )}
              </div>
            ))
          )}
        </div>

        {/* Flavor Story Section */}
        {activeCategory === 'paletas' && (
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-12 rounded-3xl mb-16 border border-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-azul/10 rounded-full blur-3xl" />
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center relative z-10">Cada Sabor Cuenta Una Historia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/30">
                <div className="text-5xl mb-4">🍫</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Chocolates</h3>
                <p className="text-slate-500 leading-relaxed">ChocoCream, Paly Kakao, ChocoFresa, ChocoCoco, ChocoTron, ChocoTurbo. Los clásicos que todas las generaciones aman.</p>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/30">
                <div className="text-5xl mb-4">🌈</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Frutas & Especiales</h3>
                <p className="text-slate-500 leading-relaxed">Mora, Zapote, Horchata, Nance, Mango Twist, Solaris. Lo único. Lo especial. Lo que te sorprenderá.</p>
              </div>
            </div>
          </div>
        )}

        {/* Where to Buy */}
        <div className="bg-slate-900 text-white p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rojo/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="font-bold text-2xl mb-4">¿Dónde Comprar Riosoto?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Riosoto está en supermercados, distribuidoras y carros de venta en toda Centroamérica.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/contact" className="inline-block bg-rojo text-white px-8 py-3.5 rounded-full font-semibold hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300">
                Encuentra Riosoto Cerca de Ti
              </a>
              <a href="/contact" className="inline-block border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                No Encuentras? Cuéntanos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Distributor CTA */}
      <CTASection
        subtitle="¿Distribuyes o Vendes?"
        title="Distribuye Riosoto"
        description="Lleva el sabor de Centroamérica a tu negocio. Márgenes atractivos. Marca de confianza."
        actions={[
          { href: '/contact', label: 'Conoce Opciones de Distribución', className: 'bg-white text-slate-900 hover:shadow-xl' },
        ]}
        className="mt-20"
      />
    </main>
  );
}
