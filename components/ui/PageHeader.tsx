interface PageHeaderProps {
  tag?: string;
  title: string;
  description: string;
  centered?: boolean;
}

export function PageHeader({ tag, title, description, centered = false }: PageHeaderProps) {
  return (
    <div className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-amber-50 via-orange-50/50 to-pink-50/30 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className={`max-w-7xl mx-auto relative z-10 ${centered ? 'text-center' : ''}`}>
        {tag && (
          <span className="inline-block text-accent font-semibold text-xs tracking-[0.25em] uppercase mb-4">{tag}</span>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-amber-950">{title}</h1>
        <p className="text-xl text-amber-800/50 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
