'use client';

import { useState } from 'react';
import type { CareerFormData } from '@/data/types';
import { jobPositions } from '@/data/empleo';
import { PageHeader } from '@/components/ui/PageHeader';
import { CTASection } from '@/components/ui/CTASection';

export default function Empleo() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const svJobs = jobPositions.filter((j) => j.country === 'El Salvador');
  const hnJobs = jobPositions.filter((j) => j.country === 'Honduras');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: CareerFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      message: formData.get('message') as string,
    };

    const newErrors: Record<string, string> = {};
    if (!data.name?.trim()) newErrors.name = 'El nombre es requerido';
    if (!data.email?.trim()) newErrors.email = 'El email es requerido';
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Email inválido';
    if (!data.phone?.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!data.position?.trim()) newErrors.position = 'Selecciona una posición';
    if (!data.message?.trim()) newErrors.message = 'Cuéntanos sobre ti';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Application submitted:', data);
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses = (field: string) =>
    `w-full border ${errors[field] ? 'border-red-400' : 'border-slate-200'} bg-white rounded-2xl p-4 focus:border-azul focus:ring-2 focus:ring-azul/20 focus:outline-none transition-all text-base text-slate-900`;

  return (
    <main>
      <PageHeader
        tag="Empleo"
        title="Únete al Equipo Riosoto"
        description="Construye tu carrera en la marca de helados más querida de Centroamérica. 80 años de tradición, y tú puedes ser parte de lo que viene."
      />

      {/* Job Listings */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">Posiciones Abiertas</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Oportunidades Disponibles</h2>
          </div>

          {/* El Salvador */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🇸🇻</span>
              <h3 className="text-2xl font-bold text-slate-900">El Salvador</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {svJobs.map((job) => (
                <div key={job.id} className="bg-white border border-slate-200/80 rounded-3xl p-7 hover:shadow-lg hover:border-rojo/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-rojo transition-colors">{job.title}</h4>
                    <span className="text-xs font-semibold bg-azul/10 text-azul px-3 py-1 rounded-full whitespace-nowrap">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {job.department}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-5 leading-relaxed">{job.description}</p>
                  <div className="space-y-1.5">
                    {job.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <svg className="w-4 h-4 text-rojo mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honduras */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🇭🇳</span>
              <h3 className="text-2xl font-bold text-slate-900">Honduras</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {hnJobs.map((job) => (
                <div key={job.id} className="bg-white border border-slate-200/80 rounded-3xl p-7 hover:shadow-lg hover:border-rojo/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-rojo transition-colors">{job.title}</h4>
                    <span className="text-xs font-semibold bg-azul/10 text-azul px-3 py-1 rounded-full whitespace-nowrap">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {job.department}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-5 leading-relaxed">{job.description}</p>
                  <div className="space-y-1.5">
                    {job.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <svg className="w-4 h-4 text-rojo mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-blue-50 via-sky-50/50 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">Aplica Ahora</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Envía tu Solicitud</h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto mt-4">Selecciona la posición que te interesa y cuéntanos sobre ti.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">Nombre Completo *</label>
                  <input type="text" name="name" required className={inputClasses('name')} placeholder="Tu nombre completo" />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">Email *</label>
                  <input type="email" name="email" required className={inputClasses('email')} placeholder="tu@email.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">Teléfono *</label>
                  <input type="tel" name="phone" required className={inputClasses('phone')} placeholder="+503 0000-0000" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">Posición de Interés *</label>
                  <select name="position" required className={inputClasses('position')}>
                    <option value="">Selecciona una posición...</option>
                    {jobPositions.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title} — {job.location}, {job.country}
                      </option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500 text-xs mt-1.5">{errors.position}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">Cuéntanos Sobre Ti *</label>
                  <textarea
                    name="message"
                    required
                    className={inputClasses('message')}
                    style={{ height: '10rem' }}
                    placeholder="Tu experiencia, por qué te interesa Riosoto, y cualquier cosa que quieras compartir..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-rojo text-white py-4 rounded-2xl font-semibold hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300"
                >
                  Enviar Solicitud
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 p-5 rounded-2xl text-green-700 text-sm font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ¡Gracias! Recibimos tu solicitud. Te contactaremos pronto.
                  </div>
                )}
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">¿Por Qué Riosoto?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🏭</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Empresa Estable</h4>
                      <p className="text-slate-500 text-sm">80 años en el mercado. Crecimiento constante en toda Centroamérica.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📈</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Crecimiento Profesional</h4>
                      <p className="text-slate-500 text-sm">Oportunidades de desarrollo y capacitación continua.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">❤️</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Cultura Familiar</h4>
                      <p className="text-slate-500 text-sm">Somos una empresa con valores. Aquí la gente importa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🍦</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Helado Gratis</h4>
                      <p className="text-slate-500 text-sm">Obvio. Todos los sabores, cuando quieras.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">Proceso de Selección</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-rojo/10 text-rojo font-bold text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <p className="text-slate-500 text-sm">Envía tu solicitud aquí</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-rojo/10 text-rojo font-bold text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <p className="text-slate-500 text-sm">Revisamos tu perfil (1-3 días)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-rojo/10 text-rojo font-bold text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <p className="text-slate-500 text-sm">Entrevista con el equipo</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-rojo/10 text-rojo font-bold text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <p className="text-slate-500 text-sm">¡Bienvenido a Riosoto!</p>
                  </div>
                </div>
              </div>

              <div className="bg-azul/5 p-8 rounded-3xl border border-azul/10">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">¿Preguntas?</h3>
                <p className="text-slate-500 text-sm">Escríbenos a <span className="text-azul font-semibold">empleo@riosoto.com</span> y te responderemos a la brevedad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Tu Futuro Empieza Aquí"
        description="Riosoto es más que helados. Es una familia, una tradición, y una oportunidad de crecer. ¿Listo para ser parte?"
        actions={[
          { href: '#', label: 'Ver Posiciones Arriba', className: 'bg-white text-slate-900 hover:shadow-xl' },
          { href: '/contact', label: 'Contactar RRHH', variant: 'secondary' },
        ]}
      />
    </main>
  );
}
