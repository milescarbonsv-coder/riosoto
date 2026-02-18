'use client';

import { useState } from 'react';
import { blogPosts, blogCategories } from '@/data/blog';
import type { BlogCategory } from '@/data/types';
import { PageHeader } from '@/components/ui/PageHeader';
import { CategoryTabs } from '@/components/ui/CategoryTabs';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  const categoryTabs = blogCategories.map((cat) => ({
    key: cat,
    label: cat === 'All' ? 'Todas' : cat,
  }));

  return (
    <main>
      <PageHeader
        tag="HISTORIAS"
        title="El Blog de Riosoto"
        description="Historias de sabor, tradición y los momentos que hacen especial a Riosoto."
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
              className="bg-white rounded-3xl border border-amber-100/50 hover-lift cursor-pointer overflow-hidden group"
            >
              <PlaceholderImage emoji={post.image} gradient="from-amber-50 to-orange-50" />

              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-amber-800/30 text-xs">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-amber-950 mb-3 leading-tight group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-amber-800/40 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-amber-800/30 text-xs">{post.date}</span>
                  <button
                    onClick={() => console.log('Navigate to post:', post.id)}
                    className="text-accent font-semibold hover:text-accent-dark text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                  >
                    Leer
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
            <p className="text-amber-800/40 text-lg">No hay artículos en esta categoría todavía.</p>
          </div>
        )}

        {/* Newsletter */}
        <NewsletterForm />
      </div>
    </main>
  );
}
