import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { flavorHighlights } from '@/data/home';
import { FlavorCard } from '@/components/ui/FlavorCard';
import { StatCard } from '@/components/ui/StatCard';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { CTASection } from '@/components/ui/CTASection';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default async function Home() {
  const t = await getTranslations('home');

  const heritageStatsTranslated = [
    { value: "80", label: t('heritageStats.years') },
    { value: "30+", label: t('heritageStats.flavors') },
    { value: "3", label: t('heritageStats.countries') },
    { value: "1946", label: t('heritageStats.founded') },
  ];

  const featureCardsTranslated = [
    {
      emoji: "👨‍👩‍👧‍👦",
      title: t('features.roots.title'),
      description: t('features.roots.description'),
      borderColor: "border-rojo",
    },
    {
      emoji: "✨",
      title: t('features.flavor.title'),
      description: t('features.flavor.description'),
      borderColor: "border-amarillo",
    },
    {
      emoji: "🚀",
      title: t('features.variety.title'),
      description: t('features.variety.description'),
      borderColor: "border-azul",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero — bold, product-forward */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-gradient-to-br from-amber-50/50 via-white to-sky-50/30">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-azul/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amarillo/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rojo/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight">
              {t('heroTitle1')}
              <span className="block text-gradient">{t('heroTitle2')}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="inline-flex items-center gap-2 bg-rojo text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-rojo-dark hover:shadow-xl hover:shadow-rojo/25 transition-all duration-300 hover:-translate-y-0.5">
                {t('heroCTA')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="#heritage" className="inline-flex items-center gap-2 bg-white/80 text-slate-800 px-8 py-4 rounded-full font-semibold text-base border border-slate-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                {t('heroSecondary')}
              </a>
            </div>
          </div>

          {/* Riosito mascot + floating products */}
          <div className="relative h-[450px] lg:h-[550px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/riosito-mascot.webp"
                alt="Riosito — mascota de Riosoto"
                width={540}
                height={960}
                className="h-[480px] w-auto object-contain drop-shadow-2xl animate-float-slow"
                priority
              />
            </div>
            <div className="absolute top-[2%] left-[0%] animate-float">
              <Image src="/products/choco-cream.png" alt="ChocoCream" width={100} height={100} className="drop-shadow-xl" />
            </div>
            <div className="absolute top-[8%] right-[0%] animate-float-delay">
              <Image src="/products/torbellino.png" alt="Torbellino" width={90} height={90} className="drop-shadow-xl" />
            </div>
            <div className="absolute bottom-[15%] left-[0%] animate-float-delay">
              <Image src="/products/mora.png" alt="Mora" width={85} height={85} className="drop-shadow-xl" />
            </div>
            <div className="absolute bottom-[10%] right-[0%] animate-float">
              <Image src="/products/horchata.png" alt="Horchata" width={95} height={95} className="drop-shadow-xl" />
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
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('flavorsTag')}</span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
                {t('flavorsTitle')} <em className="not-italic text-gradient">{t('flavorsTitleHighlight')}</em>
              </h2>
              <p className="text-slate-500 text-lg max-w-lg mx-auto">{t('flavorsDescription')}</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {flavorHighlights.map((flavor) => (
                <FlavorCard key={flavor.name} variant="compact" flavor={flavor} />
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="text-center mt-14">
              <Link href="/products" className="inline-flex items-center gap-2 bg-rojo text-white px-10 py-4 rounded-full font-semibold hover:bg-rojo-dark hover:shadow-xl hover:shadow-rojo/25 transition-all duration-300 hover:-translate-y-0.5">
                {t('flavorsViewAll')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Heritage Section — Brand Red */}
      <section id="heritage" className="py-24 md:py-32 px-6 bg-rojo text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amarillo/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-amarillo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('heritageTag')}</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{t('heritageTitle')} <em className="not-italic text-amarillo">{t('heritageTitleHighlight')}</em></h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {t('heritageDescription')}
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-amarillo font-semibold hover:gap-3 transition-all duration-300">
                  {t('heritageLink')}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {heritageStatsTranslated.map((stat) => (
                  <StatCard key={stat.label} {...stat} variant="frosted" />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Riosoto */}
      <section className="py-24 md:py-32 px-6 bg-warm">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('featuresTag')}</span>
              <div className="flex items-center gap-4 justify-center flex-wrap">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900">{t('featuresTitle')}</h2>
                <Image src="/logo.svg" alt="Riosoto" width={300} height={90} className="h-12 md:h-16 w-auto" />
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCardsTranslated.map((card) => (
                <FeatureCard key={card.title} {...card} variant="home" />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        id="distributor"
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        actions={[
          { href: '/contact', label: t('ctaAction1'), className: 'bg-white text-slate-900 hover:shadow-xl' },
          { href: '/products', label: t('ctaAction2'), variant: 'secondary' },
        ]}
      />
    </main>
  );
}
