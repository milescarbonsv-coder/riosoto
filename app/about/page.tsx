import { timelineEntries, values, aboutStats } from '@/data/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { StatCard } from '@/components/ui/StatCard';
import { CTASection } from '@/components/ui/CTASection';

export default function About() {
  return (
    <main>
      <PageHeader
        tag="NUESTRA HISTORIA"
        title="80 Años de Sabor"
        description="Desde 1946, Riosoto ha sido sinónimo de helado en Centroamérica."
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Core Story */}
        <div className="mb-28">
          <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug max-w-3xl">
            Una Familia. Un Sueño. <span className="text-gradient">80 Años de Perfección.</span>
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-slate-500 leading-relaxed">
              En 1946, una familia salvadoreña decide hacer algo simple pero importante: crear el mejor helado posible.
              No el más barato. No el más vendido. El mejor.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Eso fue hace 80 años. Y aquí estamos, todavía haciendo lo mismo.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Hoy, Riosoto es más que una marca. Es una memoria. Es el recuerdo de tu infancia. Es el helado que tu abuela compraba.
              Es lo que pides cuando quieres algo especial. Es Centroamérica en una cuchara.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-28">
          <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">Hitos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-14">El Viaje</h2>

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
          <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">Principios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-14">En Qué Creemos</h2>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-5">¿Por Qué Riosoto?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Porque después de 80 años, sabemos que la calidad y la confianza no tienen precio.
              No somos la tendencia del momento. Somos la tradición de tu vida.
            </p>
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
        title="¿Listo para Probar Riosoto?"
        description="Encuentra Riosoto en tu supermercado o distribuidora más cercana. Si no está, pídelo. Queremos estar donde estés tú."
        actions={[
          { href: '/contact', label: 'Encuentra Riosoto Cerca de Ti', className: 'bg-white text-slate-900 hover:shadow-xl' },
        ]}
      />
    </main>
  );
}
