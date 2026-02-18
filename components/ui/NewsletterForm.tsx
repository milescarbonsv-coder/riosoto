'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface NewsletterFormProps {
  variant?: 'default' | 'footer';
}

export function NewsletterForm({ variant = 'default' }: NewsletterFormProps) {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (variant === 'footer') {
    return (
      <div>
        <h4 className="font-semibold text-xs text-slate-500 uppercase tracking-[0.2em] mb-5">{t('title')}</h4>
        <p className="text-sm text-slate-400 mb-4">{t('description')}</p>
        {submitted ? (
          <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {t('success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              required
              className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rojo focus:ring-1 focus:ring-rojo/30 transition-all"
            />
            <button
              type="submit"
              className="bg-rojo text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-rojo-dark transition-colors"
            >
              {t('submit')}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50/40 to-rose-50/20 border border-slate-200/50 p-12 rounded-3xl text-center relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-rojo/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-amarillo/15 rounded-full blur-2xl" />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-3 text-slate-900">{t('title')}</h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">
          {t('description')}
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 font-medium px-6 py-3 rounded-full border border-green-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {t('success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              required
              className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-azul focus:ring-2 focus:ring-azul/20 transition-all"
            />
            <button
              type="submit"
              className="bg-rojo text-white px-7 py-3.5 rounded-full font-semibold hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300"
            >
              {t('submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
