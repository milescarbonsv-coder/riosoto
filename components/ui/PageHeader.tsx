interface PageHeaderProps {
  tag?: string;
  title: string;
  description: string;
  centered?: boolean;
}

export function PageHeader({ tag, title, description, centered = false }: PageHeaderProps) {
  return (
    <div className="py-24 px-4 bg-gray-50 border-b border-gray-100">
      <div className={`max-w-6xl mx-auto ${centered ? 'text-center' : ''}`}>
        {tag && (
          <p className="text-orange-500 font-semibold text-sm mb-3 tracking-[0.2em] uppercase">{tag}</p>
        )}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">{title}</h1>
        <p className="text-xl text-gray-500 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
