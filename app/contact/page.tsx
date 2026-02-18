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
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-rojo/10 hover:bg-rojo hover:text-white text-rojo flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-rojo/10 hover:bg-rojo hover:text-white text-rojo flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-rojo/10 hover:bg-rojo hover:text-white text-rojo flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
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
