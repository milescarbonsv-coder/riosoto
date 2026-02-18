import { timelineEntries, values, aboutStats } from '@/data/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { StatCard } from '@/components/ui/StatCard';
import { CTASection } from '@/components/ui/CTASection';

export default function About() {
  return (
    <main className="bg-white">
      <PageHeader
        tag="NUESTRA HISTORIA"
        title="80 Años de Sabor"
        description="Desde 1946, Riosoto ha sido la voz del helado en El Salvador."
      />

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Core Story */}
        <div className="mb-24">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug">
            Una Familia. Un Sueño. 80 Años de Perfección.
          </p>
          <p className="text-lg text-gray-500 mb-6 leading-relaxed">
            En 1946, una familia salvadoreña decide hacer algo simple pero importante: crear el mejor helado posible.
            No el más barato. No el más vendido. El mejor.
          </p>
          <p className="text-lg text-gray-500 mb-6 leading-relaxed">
            Eso fue hace 80 años. Y aquí estamos, todavía haciendo lo mismo.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Hoy, Riosoto es más que una marca. Es una memoria. Es el recuerdo de tu infancia. Es el helado que tu abuela compraba.
            Es lo que pides cuando quieres algo especial. Es El Salvador en una cuchara.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <p className="text-orange-500 font-semibold text-sm mb-3 tracking-[0.2em] uppercase">HITOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">El Viaje</h2>

          <div className="space-y-8">
            {timelineEntries.map((entry) => (
              <div key={entry.year} className="flex gap-6 items-start">
                <div className="bg-gray-900 text-white rounded-xl w-24 h-24 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  {entry.year}
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl flex-grow">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{entry.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <p className="text-orange-500 font-semibold text-sm mb-3 tracking-[0.2em] uppercase">PRINCIPIOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">En Qué Creemos</h2>

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
        <div className="bg-gray-900 text-white p-12 rounded-2xl text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">¿Por Qué Riosoto?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Porque después de 80 años, sabemos que la calidad y la confianza no tienen precio.
            No somos la tendencia del momento. Somos la tradición de tu vida.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-t border-b border-gray-100 py-12">
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
          { href: '/', label: 'Encuentra Riosoto Cerca de Ti', className: 'bg-white text-gray-900 hover:shadow-lg' },
        ]}
      />
    </main>
  );
}
