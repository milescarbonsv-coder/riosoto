import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { StatCard } from '@/components/ui/StatCard';
import { CTASection } from '@/components/ui/CTASection';

export default async function About() {
  const t = await getTranslations('about');

  const timelineEntries = [
    { year: "1946", title: t('timeline.1946.title'), description: t('timeline.1946.description') },
    { year: "1960s", title: t('timeline.1960s.title'), description: t('timeline.1960s.description') },
    { year: "1980s", title: t('timeline.1980s.title'), description: t('timeline.1980s.description') },
    { year: "2000s", title: t('timeline.2000s.title'), description: t('timeline.2000s.description') },
    { year: "2026", title: t('timeline.2026.title'), description: t('timeline.2026.description') },
  ];

  const values = [
    { emoji: "🎯", title: t('values.quality.title'), description: t('values.quality.description'), gradient: "from-orange-100 to-pink-100", borderColor: "border-orange-500" },
    { emoji: "❤️", title: t('values.love.title'), description: t('values.love.description'), gradient: "from-purple-100 to-blue-100", borderColor: "border-purple-500" },
    { emoji: "🚀", title: t('values.innovation.title'), description: t('values.innovation.description'), gradient: "from-yellow-100 to-orange-100", borderColor: "border-yellow-500" },
    { emoji: "🎉", title: t('values.moment.title'), description: t('values.moment.description'), gradient: "from-pink-100 to-purple-100", borderColor: "border-pink-500" },
  ];

  const aboutStats = [
    { value: "80", label: t('stats.years'), color: "text-rojo" },
    { value: "30+", label: t('stats.flavors'), color: "text-azul" },
    { value: "3", label: t('stats.countries'), color: "text-amarillo-dark" },
    { value: "∞", label: t('stats.moments'), color: "text-rojo-dark" },
  ];

  return (
    <main>
      <PageHeader
        tag={t('headerTag')}
        title={t('headerTitle')}
        description={t('headerDescription')}
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Core Story */}
        <div className="mb-28">
          <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug max-w-3xl">
            {t('storyTitle')} <span className="text-gradient">{t('storyTitleHighlight')}</span>
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-slate-500 leading-relaxed">{t('storyP1')}</p>
            <p className="text-lg text-slate-500 leading-relaxed">{t('storyP2')}</p>
            <p className="text-lg text-slate-500 leading-relaxed">{t('storyP3')}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-28">
          <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('timelineTag')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-14">{t('timelineTitle')}</h2>
          <div className="space-y-6">
            {timelineEntries.map((entry) => (
              <div key={entry.year} className="flex gap-6 items-start group">
                <div className="bg-gradient-to-br from-rojo to-rojo-dark text-white rounded-2xl w-24 h-24 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-rojo/20 group-hover:scale-105 transition-transform duration-300">
                  {entry.year}
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-sky-50/50 p-8 rounded-2xl flex-grow border border-slate-200/50 hover-lift">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{entry.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-28">
          <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('valuesTag')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-14">{t('valuesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <FeatureCard
                key={value.title}
                emoji={value.emoji}
                title={value.title}
                description={value.description}
                borderColor={value.borderColor}
                variant="about"
                gradient={value.gradient}
              />
            ))}
          </div>
        </div>

        {/* Why Riosoto */}
        <div className="bg-slate-900 text-white p-12 rounded-3xl text-center mb-28 relative overflow-hidden">
          <div className="absolute top-0 left-1/3 w-48 h-48 bg-rojo/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{t('whyTitle')}</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">{t('whyDescription')}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-t border-b border-slate-200/50 py-12">
          {aboutStats.map((stat) => (
            <StatCard key={stat.label} {...stat} variant="solid" />
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        actions={[
          { href: '/contact', label: t('ctaAction'), className: 'bg-white text-slate-900 hover:shadow-xl' },
        ]}
      />
    </main>
  );
}
