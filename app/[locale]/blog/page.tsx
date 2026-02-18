'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { blogPosts, blogCategories } from '@/data/blog';
import type { BlogCategory } from '@/data/types';
import { PageHeader } from '@/components/ui/PageHeader';
import { CategoryTabs } from '@/components/ui/CategoryTabs';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

export default function Blog() {
  const t = useTranslations('blog');
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  const categoryTabs = blogCategories.map((cat) => ({
    key: cat,
    label: cat === 'All' ? t('categoryAll') : cat,
  }));

  return (
    <main>
      <PageHeader
        tag={t('headerTag')}
        title={t('headerTitle')}
        description={t('headerDescription')}
        centered
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <CategoryTabs
          tabs={categoryTabs}
          activeKey={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/50 hover-lift cursor-pointer overflow-hidden group"
            >
              <PlaceholderImage emoji={post.image} gradient="from-blue-50 to-sky-50" />

              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-rojo/10 text-rojo px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-rojo transition-colors duration-200">
                  {t(`posts.${post.id}.title`)}
                </h3>

                <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                  {t(`posts.${post.id}.excerpt`)}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs">{post.date}</span>
                  <button
                    onClick={() => console.log('Navigate to post:', post.id)}
                    className="text-rojo font-semibold hover:text-rojo-dark text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                  >
                    {t('readButton')}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 mb-20">
            <div className="text-6xl mb-4">🍦</div>
            <p className="text-slate-500 text-lg">{t('emptyState')}</p>
          </div>
        )}

        {/* Newsletter */}
        <NewsletterForm />
      </div>
    </main>
  );
}
