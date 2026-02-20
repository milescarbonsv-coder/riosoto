'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { CareerFormData } from '@/data/types';
import { jobPositions } from '@/data/empleo';
import { PageHeader } from '@/components/ui/PageHeader';
import { CTASection } from '@/components/ui/CTASection';

export default function Empleo() {
  const t = useTranslations('empleo');
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
    if (!data.name?.trim()) newErrors.name = t('errorNameRequired');
    if (!data.email?.trim()) newErrors.email = t('errorEmailRequired');
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = t('errorEmailInvalid');
    if (!data.phone?.trim()) newErrors.phone = t('errorPhoneRequired');
    if (!data.position?.trim()) newErrors.position = t('errorPositionRequired');
    if (!data.message?.trim()) newErrors.message = t('errorMessageRequired');

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

  const renderJobCards = (jobs: typeof jobPositions) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white border border-slate-200/80 rounded-3xl p-7 hover:shadow-lg hover:border-rojo/20 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-lg font-bold text-slate-900 group-hover:text-rojo transition-colors">{t(`jobs.${job.id}.title`)}</h4>
            <span className="text-xs font-semibold bg-azul/10 text-azul px-3 py-1 rounded-full whitespace-nowrap">{t(`jobs.${job.id}.type`)}</span>
          </div>
          <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              {t(`jobs.${job.id}.department`)}
            </span>
          </div>
          <p className="text-slate-500 text-sm mb-5 leading-relaxed">{t(`jobs.${job.id}.description`)}</p>
          <div className="space-y-1.5">
            {(t.raw(`jobs.${job.id}.requirements`) as string[]).map((req: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <svg className="w-4 h-4 text-rojo mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {req}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main>
      <PageHeader
        tag={t('headerTag')}
        title={t('headerTitle')}
        description={t('headerDescription')}
      />

      {/* Job Listings */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('openPositionsTag')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{t('openPositionsTitle')}</h2>
          </div>

          {/* El Salvador */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🇸🇻</span>
              <h3 className="text-2xl font-bold text-slate-900">El Salvador</h3>
            </div>
            {renderJobCards(svJobs)}
          </div>

          {/* Honduras */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🇭🇳</span>
              <h3 className="text-2xl font-bold text-slate-900">Honduras</h3>
            </div>
            {renderJobCards(hnJobs)}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-blue-50 via-sky-50/50 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('applyTag')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{t('applyTitle')}</h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto mt-4">{t('applyDescription')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">{t('labelFullName')}</label>
                  <input type="text" name="name" required className={inputClasses('name')} placeholder={t('placeholderFullName')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">{t('labelEmail')}</label>
                  <input type="email" name="email" required className={inputClasses('email')} placeholder={t('placeholderEmail')} />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">{t('labelPhone')}</label>
                  <input type="tel" name="phone" required className={inputClasses('phone')} placeholder={t('placeholderPhone')} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">{t('labelPosition')}</label>
                  <select name="position" required className={inputClasses('position')}>
                    <option value="">{t('placeholderPosition')}</option>
                    {jobPositions.map((job) => (
                      <option key={job.id} value={job.id}>
                        {t(`jobs.${job.id}.title`)} — {job.location}, {job.country}
                      </option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500 text-xs mt-1.5">{errors.position}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-slate-900 text-sm">{t('labelAboutYou')}</label>
                  <textarea
                    name="message"
                    required
                    className={inputClasses('message')}
                    style={{ height: '10rem' }}
                    placeholder={t('placeholderAboutYou')}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-rojo text-white py-4 rounded-2xl font-semibold hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300"
                >
                  {t('submitButton')}
                </button>
                {submitted && (
                  <div className="bg-green-50 border border-green-200 p-5 rounded-2xl text-green-700 text-sm font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {t('successMessage')}
                  </div>
                )}
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">{t('whyRioSotoTitle')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🏭</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{t('benefits.stable.title')}</h4>
                      <p className="text-slate-500 text-sm">{t('benefits.stable.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📈</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{t('benefits.growth.title')}</h4>
                      <p className="text-slate-500 text-sm">{t('benefits.growth.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">❤️</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{t('benefits.culture.title')}</h4>
                      <p className="text-slate-500 text-sm">{t('benefits.culture.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🍦</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{t('benefits.icecream.title')}</h4>
                      <p className="text-slate-500 text-sm">{t('benefits.icecream.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{t('processTitle')}</h3>
                <div className="space-y-3">
                  {['1', '2', '3', '4'].map((step) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-rojo/10 text-rojo font-bold text-sm flex items-center justify-center flex-shrink-0">{step}</span>
                      <p className="text-slate-500 text-sm">{t(`processSteps.${step}`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-azul/5 p-8 rounded-3xl border border-azul/10">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{t('questionsTitle')}</h3>
                <p className="text-slate-500 text-sm">{t('questionsDescription', { email: '' })} <span className="text-azul font-semibold">{t('questionsEmail')}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        actions={[
          { href: '#', label: t('ctaAction1'), className: 'bg-white text-slate-900 hover:shadow-xl' },
          { href: '/contact', label: t('ctaAction2'), variant: 'secondary' },
        ]}
      />
    </main>
  );
}
