interface PageHeaderProps {
  tag?: string;
  title: string;
  description: string;
  centered?: boolean;
}

export function PageHeader({ tag, title, description, centered = false }: PageHeaderProps) {
  return (
    <div className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-blue-50 via-sky-50/50 to-amber-50/30 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-azul/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amarillo/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className={`max-w-7xl mx-auto relative z-10 ${centered ? 'text-center' : ''}`}>
        {tag && (
          <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{tag}</span>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-slate-900">{title}</h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
