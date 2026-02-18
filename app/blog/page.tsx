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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer overflow-hidden border-t-4 border-orange-500"
            >
              <PlaceholderImage emoji={post.image} gradient="from-orange-100 to-pink-100" />

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button
                    onClick={() => console.log('Navigate to post:', post.id)}
                    className="text-orange-600 font-bold hover:text-orange-700"
                  >
                    Leer →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 text-lg mb-20">
            No hay artículos en esta categoría todavía.
          </p>
        )}

        {/* Newsletter CTA */}
        <NewsletterForm />
      </div>
    </main>
  );
}
