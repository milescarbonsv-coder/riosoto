import { flavorHighlights, heritageStats, featureCards } from '@/data/home';
import { FlavorCard } from '@/components/ui/FlavorCard';
import { StatCard } from '@/components/ui/StatCard';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { CTASection } from '@/components/ui/CTASection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-orange-600 font-bold text-xs sm:text-sm md:text-lg mb-2 sm:mb-4 tracking-wide">DESDE 1946</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 md:mb-6 text-gray-900 leading-tight">
            Helados Riosoto
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-3 sm:mb-4 md:mb-6 font-light">
            80 años de tradición, sabor y confianza
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            La marca local que las familias salvadoreñas eligen desde 1946. Ahora trayendo 30+ sabores únicos.
          </p>
          <a href="#distributor" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-lg transition transform hover:scale-105">
            Distribuye Riosoto Hoy
          </a>
        </div>
      </section>

      {/* Flavor Highlights Preview */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-2 sm:mb-3 md:mb-4 text-gray-900">Sabores que Enamoran</h2>
          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">Desde clásicos hasta aventuras exóticas</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {flavorHighlights.map((flavor) => (
              <FlavorCard key={flavor.name} variant="compact" flavor={flavor} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <a href="/products" className="inline-block bg-gray-900 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition">
              Ver Todo el Catálogo (30+ Sabores)
            </a>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6">80 Años de Historia</h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl">
            Desde 1946, Riosoto ha sido el sabor de confianza en El Salvador. Generaciones de salvadoreños han crecido con nuestros helados.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {heritageStats.map((stat) => (
              <StatCard key={stat.label} {...stat} variant="frosted" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Riosoto */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-8 sm:mb-12 md:mb-16 text-gray-900">
            Por Qué Elegir Riosoto
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} variant="home" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        id="distributor"
        gradient="from-orange-400 via-pink-400 to-purple-400"
        title="¿Listo para Distribuir?"
        description="Supermercados, distribuidores, vendedores—todos ganan con Riosoto. Márgenes atractivos. Apoyo total. Marca de confianza."
        actions={[
          { href: '/contact', label: 'Solicitar Información', className: 'bg-white text-orange-600 hover:shadow-lg transform hover:scale-105' },
          { href: '/products', label: 'Ver Catálogo', variant: 'secondary' },
        ]}
      />
    </main>
  );
}
