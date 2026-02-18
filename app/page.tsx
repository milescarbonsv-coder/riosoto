import { flavorHighlights, heritageStats, featureCards } from '@/data/home';
import { FlavorCard } from '@/components/ui/FlavorCard';
import { StatCard } from '@/components/ui/StatCard';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { CTASection } from '@/components/ui/CTASection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-orange-500 font-semibold text-sm mb-4 tracking-[0.2em] uppercase">DESDE 1946</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Helados Riosoto
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-6 font-light">
            80 años de tradición, sabor y confianza
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            La marca local que las familias salvadoreñas eligen desde 1946. Ahora trayendo 30+ sabores únicos.
          </p>
          <a href="#distributor" className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-orange-600 hover:shadow-lg transition-all duration-300">
            Distribuye Riosoto Hoy
          </a>
        </div>
      </section>

      {/* Flavor Highlights Preview */}
      <section className="py-20 md:py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 font-semibold text-sm text-center mb-3 tracking-[0.2em] uppercase">NUESTROS SABORES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">Sabores que Enamoran</h2>
          <p className="text-center text-gray-500 text-base md:text-lg mb-14">Desde clásicos hasta aventuras exóticas</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {flavorHighlights.map((flavor) => (
              <FlavorCard key={flavor.name} variant="compact" flavor={flavor} />
            ))}
          </div>

          <div className="text-center mt-14">
            <a href="/products" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
              Ver Todo el Catálogo
            </a>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 md:py-28 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 tracking-[0.2em] uppercase">NUESTRA HISTORIA</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">80 Años de Historia</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Desde 1946, Riosoto ha sido el sabor de confianza en El Salvador. Generaciones de salvadoreños han crecido con nuestros helados.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {heritageStats.map((stat) => (
              <StatCard key={stat.label} {...stat} variant="frosted" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Riosoto */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 font-semibold text-sm text-center mb-3 tracking-[0.2em] uppercase">VENTAJAS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 text-gray-900">
            Por Qué Elegir Riosoto
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} variant="home" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        id="distributor"
        gradient="from-gray-900 to-gray-800"
        title="¿Listo para Distribuir?"
        description="Supermercados, distribuidores, vendedores—todos ganan con Riosoto. Márgenes atractivos. Apoyo total. Marca de confianza."
        actions={[
          { href: '/contact', label: 'Solicitar Información', className: 'bg-white text-gray-900 hover:shadow-lg' },
          { href: '/products', label: 'Ver Catálogo', variant: 'secondary' },
        ]}
      />
    </main>
  );
}
