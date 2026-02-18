import Image from 'next/image';
import { flavorHighlights, heritageStats, featureCards } from '@/data/home';
import { FlavorCard } from '@/components/ui/FlavorCard';
import { StatCard } from '@/components/ui/StatCard';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { CTASection } from '@/components/ui/CTASection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero — bold, product-forward */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-amber-50/50">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-azul/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amarillo/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rojo/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-slate-200/50">
              <span className="w-2 h-2 rounded-full bg-rojo animate-pulse" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Desde 1946</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-slate-900 leading-[0.9]">
              Dulzura sin
              <span className="block text-gradient">Fronteras</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
              80 años creando momentos dulces en Centroamérica. 30+ sabores que cuentan la historia de una familia, una tierra, una tradición.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/products" className="inline-flex items-center gap-2 bg-rojo text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-rojo-dark hover:shadow-xl hover:shadow-rojo/25 transition-all duration-300 hover:-translate-y-0.5">
                Explorar Sabores
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#heritage" className="inline-flex items-center gap-2 bg-white/80 text-slate-800 px-8 py-4 rounded-full font-semibold text-base border border-slate-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Nuestra Historia
              </a>
            </div>
          </div>

          {/* Floating product showcase */}
          <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
            <div className="absolute top-[5%] left-[10%] animate-float">
              <Image src="/products/choco-cream.png" alt="ChocoCream" width={140} height={140} className="drop-shadow-2xl" />
            </div>
            <div className="absolute top-[15%] right-[5%] animate-float-delay">
              <Image src="/products/torbellino.png" alt="Torbellino" width={130} height={130} className="drop-shadow-2xl" />
            </div>
            <div className="absolute bottom-[20%] left-[5%] animate-float-slow">
              <Image src="/products/mora.png" alt="Mora" width={120} height={120} className="drop-shadow-2xl" />
            </div>
            <div className="absolute bottom-[10%] right-[15%] animate-float">
              <Image src="/products/horchata.png" alt="Horchata" width={135} height={135} className="drop-shadow-2xl" />
            </div>
            <div className="absolute top-[45%] left-[35%] animate-float-delay">
              <Image src="/products/mangotwist.png" alt="Mango Twist" width={150} height={150} className="drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H0Z" fill="#fafafa"/></svg>
        </div>
      </section>

      {/* Scrolling product marquee */}
      <section className="py-6 overflow-hidden border-b border-slate-200/50">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...flavorHighlights, ...flavorHighlights].map((flavor, i) => (
            <div key={`${flavor.name}-${i}`} className="flex items-center gap-3 text-slate-400">
              {flavor.image && <Image src={flavor.image} alt="" width={32} height={32} className="w-8 h-8 object-contain" />}
              <span className="text-sm font-medium tracking-wide">{flavor.name}</span>
              <span className="text-slate-300">&#x2022;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Flavor Highlights */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">Nuestros Sabores</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Sabores que <em className="not-italic text-gradient">Enamoran</em>
            </h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto">De clásicos queridos a aventuras exóticas, hay un Riosoto para cada momento.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {flavorHighlights.map((flavor) => (
              <FlavorCard key={flavor.name} variant="compact" flavor={flavor} />
            ))}
          </div>

          <div className="text-center mt-14">
            <a href="/products" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Ver los 21 sabores
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="py-24 md:py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-rojo/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-azul/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">Nuestra Historia</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">80 Años de <em className="not-italic text-azul-light">Tradición</em></h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Desde 1946, Riosoto ha sido el sabor de confianza en Centroamérica. Generaciones han crecido con nuestros helados. No somos una tendencia — somos una tradición.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-rojo font-semibold hover:gap-3 transition-all duration-300">
                Conoce nuestra historia
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {heritageStats.map((stat) => (
                <StatCard key={stat.label} {...stat} variant="frosted" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Riosoto */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">Ventajas</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
              Por Qué <em className="not-italic text-gradient">Riosoto</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} variant="home" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        id="distributor"
        title="¿Listo para Distribuir?"
        description="Supermercados, distribuidores, vendedores — todos ganan con Riosoto. Márgenes atractivos. Apoyo total. Marca de confianza."
        actions={[
          { href: '/contact', label: 'Solicitar Información', className: 'bg-white text-slate-900 hover:shadow-xl' },
          { href: '/products', label: 'Ver Catálogo', variant: 'secondary' },
        ]}
      />
    </main>
  );
}
