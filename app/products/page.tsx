'use client';

import { useState } from 'react';
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {activeCategory === 'flavors' ? (
            (currentProducts as FlavorProduct[]).map((product) => (
              <FlavorCard key={product.name} variant="full" flavor={product} />
            ))
          ) : (
            (currentProducts as OtherProduct[]).map((product) => (
              <div
                key={product.name}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 border-2 border-gray-200 hover:border-orange-400 text-center cursor-pointer"
              >
                <div className="text-6xl mb-4">{product.emoji}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
              </div>
            ))
          )}
        </div>

        {/* Flavor Cards - Detailed View */}
        {activeCategory === 'flavors' && (
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-12 rounded-3xl mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Cada Sabor Cuenta Una Historia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🍫</div>
                <h3 className="font-black text-gray-900 text-xl mb-2">Chocolates</h3>
                <p className="text-gray-700">Choco Cream, Paly Kakao, Choco Fresa, Choco Coco, Chocotron, Choco Turbo. Los clásicos que todas las generaciones aman.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌈</div>
                <h3 className="font-black text-gray-900 text-xl mb-2">Frutas & Especiales</h3>
                <p className="text-gray-700">Mora, Zapote, Horchata, Nance, Solaris. Lo único. Lo especial. Lo que te sorprenderá.</p>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-12 rounded-3xl">
          <h3 className="font-black text-2xl mb-4">¿Dónde Comprar Riosoto?</h3>
          <p className="text-lg mb-6">
            Riosoto está en supermercados, distribuidoras y carros de venta en todo El Salvador.
            Busca la marca roja y naranja que conoces.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
              Encuentra Riosoto Cerca de Ti
            </a>
            <a href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition">
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
          { href: '/contact', label: 'Conoce Opciones de Distribución', className: 'bg-white text-pink-600 hover:shadow-lg' },
        ]}
        className="mt-20"
      />
    </main>
  );
}
