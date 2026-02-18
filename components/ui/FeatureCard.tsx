interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  borderColor: string;
  variant?: 'home' | 'about';
  gradient?: string;
}

export function FeatureCard({
  emoji,
  title,
  description,
  variant = 'home',
  gradient,
}: FeatureCardProps) {
  if (variant === 'about') {
    return (
      <div className={`bg-gradient-to-br ${gradient ?? 'from-blue-50 to-sky-50'} p-10 rounded-3xl border border-slate-200/50 hover-lift`}>
        <div className="text-5xl mb-5">{emoji}</div>
        <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-500 leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/50 hover-lift group">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">{emoji}</div>
      <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
