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
    <main className="bg-white">
      <PageHeader
        tag="HISTORIAS"
        title="El Blog de Riosoto"
        description="Historias de sabor, tradición y los momentos que hacen especial a Riosoto."
      />

      <div className="max-w-6xl mx-auto px-4 py-20">
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
              className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              <PlaceholderImage emoji={post.image} gradient="from-gray-50 to-gray-100" />

              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <button
                    onClick={() => console.log('Navigate to post:', post.id)}
                    className="text-orange-500 font-medium hover:text-orange-600 text-sm"
                  >
                    Leer →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-400 text-base mb-20">
            No hay artículos en esta categoría todavía.
          </p>
        )}

        {/* Newsletter CTA */}
        <NewsletterForm />
      </div>
    </main>
  );
}
