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
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('flavors');
  const currentProducts = products[activeCategory] as (FlavorProduct | OtherProduct)[];

  return (
    <main className="bg-white">
      <PageHeader
        tag="DESCUBRE"
        title="30+ Sabores para Explorar"
        description="Desde clásicos que amas hasta aventuras que nunca imaginaste."
        centered
      />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <CategoryTabs
          tabs={productCategoryTabs}
          activeKey={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {activeCategory === 'flavors' ? (
            (currentProducts as FlavorProduct[]).map((product) => (
              <FlavorCard key={product.name} variant="full" flavor={product} />
            ))
          ) : (
            (currentProducts as OtherProduct[]).map((product) => (
              <div
                key={product.name}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center cursor-pointer"
              >
                {product.image ? (
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image src={product.image} alt={product.name} width={96} height={96} className="h-24 w-auto object-contain" />
                  </div>
                ) : (
                  <div className="text-5xl mb-4">{product.emoji}</div>
                )}
                <h3 className="font-bold text-gray-900 text-base mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.desc}</p>
              </div>
            ))
          )}
        </div>

        {/* Flavor Cards - Detailed View */}
        {activeCategory === 'flavors' && (
          <div className="bg-gray-50 p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cada Sabor Cuenta Una Historia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🍫</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Chocolates</h3>
                <p className="text-gray-500 leading-relaxed">Choco Cream, Paly Kakao, Choco Fresa, Choco Coco, Chocotron, Choco Turbo. Los clásicos que todas las generaciones aman.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌈</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Frutas & Especiales</h3>
                <p className="text-gray-500 leading-relaxed">Mora, Zapote, Horchata, Nance, Solaris. Lo único. Lo especial. Lo que te sorprenderá.</p>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-gray-900 text-white p-12 rounded-2xl">
          <h3 className="font-bold text-2xl mb-4">¿Dónde Comprar Riosoto?</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed">
            Riosoto está en supermercados, distribuidoras y carros de venta en todo El Salvador.
            Busca la marca roja y naranja que conoces.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Encuentra Riosoto Cerca de Ti
            </a>
            <a href="/contact" className="inline-block border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              No Encuentras? Cuéntanos
            </a>
          </div>
        </div>
      </div>

      {/* Distributor CTA */}
      <CTASection
        subtitle="¿Distribuyes o Vendes?"
        title="Distribuye Riosoto"
        description="Lleva el sabor de El Salvador a tu negocio. Márgenes atractivos. Marca de confianza."
        actions={[
          { href: '/contact', label: 'Conoce Opciones de Distribución', className: 'bg-white text-gray-900 hover:shadow-lg' },
        ]}
        className="mt-20"
      />
    </main>
  );
}
