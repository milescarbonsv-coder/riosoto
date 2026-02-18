interface PageHeaderProps {
  tag?: string;
  title: string;
  description: string;
  centered?: boolean;
}

export function PageHeader({ tag, title, description, centered = false }: PageHeaderProps) {
  return (
    <div className="py-20 px-4 bg-black text-white">
      <div className={`max-w-6xl mx-auto ${centered ? 'text-center' : ''}`}>
        {tag && (
          <p className="text-orange-400 font-bold text-lg mb-4 tracking-widest">{tag}</p>
        )}
        <h1 className="text-6xl font-black mb-4">{title}</h1>
        <p className="text-xl text-gray-300">{description}</p>
      </div>
    </div>
  );
}
