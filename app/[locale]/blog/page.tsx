'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { blogPosts, blogCategories } from '@/data/blog';
import type { BlogCategory } from '@/data/types';
import { PageHeader } from '@/components/ui/PageHeader';
import { CategoryTabs } from '@/components/ui/CategoryTabs';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

function renderMarkdown(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === '---') {
      elements.push(<hr key={i} className="my-8 border-slate-200" />);
      i++;
      continue;
    }

    // H2 heading
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // List items
    if (line.startsWith('- ')) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        const itemText = lines[i].slice(2);
        listItems.push(
          <li key={i} className="text-slate-600 leading-relaxed">
            {renderInline(itemText)}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 ml-2">
          {listItems}
        </ul>
      );
      continue;
    }

    // Italic line (standalone)
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      elements.push(
        <p key={i} className="text-slate-500 italic text-center text-lg mt-6">
          {line.slice(1, -1)}
        </p>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-slate-600 leading-relaxed my-4 text-base">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-slate-800">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function Blog() {
  const t = useTranslations('blog');
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  const categoryTabs = blogCategories.map((cat) => ({
    key: cat,
    label: cat === 'All' ? t('categoryAll') : cat,
  }));

  const openPost = openPostId !== null ? blogPosts.find(p => p.id === openPostId) : null;

  // Full article view
  if (openPost) {
    const content = t.raw(`posts.${openPost.id}.content`) as string;
    return (
      <main>
        <PageHeader
          tag={openPost.category}
          title={t(`posts.${openPost.id}.title`)}
          description={`${openPost.date} · ${openPost.readTime}`}
          centered
        />

        <div className="max-w-3xl mx-auto px-6 py-16">
          <button
            onClick={() => setOpenPostId(null)}
            className="inline-flex items-center gap-2 text-rojo font-semibold hover:text-rojo-dark transition-colors duration-200 mb-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t('categoryAll') === 'Todas' ? 'Volver al Blog' : 'Back to Blog'}
          </button>

          <article className="prose-custom">
            {renderMarkdown(content)}
          </article>

          <div className="mt-16">
            <NewsletterForm />
          </div>
        </div>
      </main>
    );
  }

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
              onClick={() => setOpenPostId(post.id)}
              className="bg-white rounded-3xl border border-slate-200/50 hover-lift cursor-pointer overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>

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
                  <span className="text-rojo font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    {t('readButton')}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
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
