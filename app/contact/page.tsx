'use client';

import { useState } from 'react';
import type { ContactType, ContactFormData } from '@/data/types';
import { PageHeader } from '@/components/ui/PageHeader';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [contactType, setContactType] = useState<ContactType>('consumer');
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      contactType,
      ...(contactType === 'distributor' && {
        business: formData.get('business') as string,
        businessType: formData.get('businessType') as string,
        location: formData.get('location') as string,
      }),
    };

    const newErrors: Record<string, string> = {};
    if (!data.name?.trim()) newErrors.name = 'El nombre es requerido';
    if (!data.email?.trim()) newErrors.email = 'El email es requerido';
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Email inválido';
    if (!data.message?.trim()) newErrors.message = 'El mensaje es requerido';
    if (contactType === 'distributor') {
      if (!data.business?.trim()) newErrors.business = 'La empresa es requerida';
      if (!data.businessType?.trim()) newErrors.businessType = 'Selecciona un tipo';
      if (!data.location?.trim()) newErrors.location = 'La ubicación es requerida';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleTypeChange = (type: ContactType) => {
    setContactType(type);
    setErrors({});
  };

  const inputClasses = (field: string) =>
    `w-full border ${errors[field] ? 'border-red-400' : 'border-slate-200'} bg-white rounded-2xl p-4 focus:border-azul focus:ring-2 focus:ring-azul/20 focus:outline-none transition-all text-base text-slate-900`;

  return (
    <main>
      <PageHeader
        title="Hablemos"
        description="Ya sea que ames Riosoto o quieras distribuirlo, nos encantaría escucharte."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Contact Type Selection */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          <button
            onClick={() => handleTypeChange('consumer')}
            className={`px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              contactType === 'consumer'
                ? 'bg-rojo text-white shadow-lg shadow-rojo/25'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            Soy Cliente
          </button>
          <button
            onClick={() => handleTypeChange('distributor')}
            className={`px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              contactType === 'distributor'
                ? 'bg-rojo text-white shadow-lg shadow-rojo/25'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            Soy Distribuidor
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              {contactType === 'consumer' ? 'Tu Opinión Importa' : 'Trabajemos Juntos'}
            </h2>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">
              {contactType === 'consumer'
                ? 'Cuéntanos qué piensas de Riosoto, dónde lo encontraste, o qué sabor desearías probar.'
                : 'Comparte tu información y hablemos sobre cómo Riosoto puede llegar a más personas a través de tu negocio.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-semibold mb-2 text-slate-900 text-sm">Tu Nombre *</label>
                <input type="text" name="name" required className={inputClasses('name')} placeholder="¿Cómo te llamas?" />
                {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block font-semibold mb-2 text-slate-900 text-sm">Email *</label>
                <input type="email" name="email" required className={inputClasses('email')} placeholder="tu@email.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
              </div>

              {contactType === 'distributor' && (
                <>
                  <div>
                    <label className="block font-semibold mb-2 text-slate-900 text-sm">Empresa/Negocio *</label>
                    <input type="text" name="business" required className={inputClasses('business')} placeholder="Nombre de tu negocio" />
                    {errors.business && <p className="text-red-500 text-xs mt-1.5">{errors.business}</p>}
                  </div>
                  <div>
                    <label className="block font-semibold mb-2 text-slate-900 text-sm">¿Qué eres? *</label>
                    <select name="businessType" required className={inputClasses('businessType')}>
                      <option value="">Selecciona...</option>
                      <option value="supermarket">Supermercado</option>
                      <option value="distributor">Distribuidor</option>
                      <option value="vendor">Vendedor/Carrito</option>
                      <option value="other">Otro</option>
                    </select>
                    {errors.businessType && <p className="text-red-500 text-xs mt-1.5">{errors.businessType}</p>}
                  </div>
                  <div>
                    <label className="block font-semibold mb-2 text-slate-900 text-sm">Ubicación (Ciudad/Región) *</label>
                    <input type="text" name="location" required className={inputClasses('location')} placeholder="¿Dónde estás?" />
                    {errors.location && <p className="text-red-500 text-xs mt-1.5">{errors.location}</p>}
                  </div>
                </>
              )}

              <div>
                <label className="block font-semibold mb-2 text-slate-900 text-sm">
                  {contactType === 'consumer' ? 'Tu Mensaje' : 'Cuéntanos Más'} *
                </label>
                <textarea
                  name="message"
                  required
                  className={inputClasses('message')}
                  style={{ height: '10rem' }}
                  placeholder={contactType === 'consumer'
                    ? '¿Qué piensas de Riosoto? ¿Qué sabor amas? ¿Dónde lo compraste?'
                    : 'Cuéntanos sobre tu negocio y por qué te interesa distribuir Riosoto.'}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-rojo text-white py-4 rounded-2xl font-semibold hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300"
              >
                {contactType === 'consumer' ? 'Enviar Mi Opinión' : 'Solicitar Información'}
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 p-5 rounded-2xl text-green-700 text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  ¡Gracias! Nos contactaremos muy pronto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-3xl border border-slate-200/50">
              <h2 className="text-xl font-bold mb-6 text-slate-900">Contacto Directo</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Dirección</h3>
                  <p className="text-slate-500">1a. Calle Oriente #1008<br/>San Salvador, El Salvador</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Email</h3>
                  <p className="text-slate-500">consultas@riosoto.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Google Maps</h3>
                  <a href="https://goo.gl/maps/nttC9PqK6WZXsVRBA" target="_blank" className="text-rojo hover:text-rojo-dark font-semibold inline-flex items-center gap-1 text-sm hover:gap-2 transition-all duration-200">
                    Ver en el Mapa
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-3xl border border-slate-200/50">
              <h3 className="font-bold text-slate-900 mb-4 text-sm">Síguenos</h3>
              <p className="text-slate-500 mb-5 text-sm">Encuentra Riosoto en redes sociales.</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-rojo/10 hover:bg-rojo hover:text-white text-rojo flex items-center justify-center transition-all duration-300 text-xs font-bold">IG</a>
                <a href="#" className="w-10 h-10 rounded-full bg-rojo/10 hover:bg-rojo hover:text-white text-rojo flex items-center justify-center transition-all duration-300 text-xs font-bold">FB</a>
                <a href="#" className="w-10 h-10 rounded-full bg-rojo/10 hover:bg-rojo hover:text-white text-rojo flex items-center justify-center transition-all duration-300 text-xs font-bold">TK</a>
              </div>
            </div>

            {contactType === 'consumer' && (
              <div className="bg-azul/5 p-8 rounded-3xl border border-azul/10">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">Respuesta Rápida</h3>
                <p className="text-slate-500 text-sm">Tu opinión nos importa. Respondemos en 24 horas.</p>
              </div>
            )}

            {contactType === 'distributor' && (
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-3xl border border-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">Oportunidad Real</h3>
                <p className="text-slate-500 text-sm mb-2">Si amas Riosoto y quieres que llegue a más gente, hablemos.</p>
                <p className="text-slate-400 text-xs">Distribuidores, supermercados y vendedores bienvenidos.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trust CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-rojo/10 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-4">Esperamos tu Mensaje</h2>
          <p className="text-slate-300 leading-relaxed">
            Riosoto es para todos. Cliente, distribuidor, o simplemente alguien que quiere saber más: queremos escucharte.
          </p>
        </div>
      </section>
    </main>
  );
}
