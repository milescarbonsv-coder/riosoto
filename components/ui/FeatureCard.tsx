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
      <div className={`bg-gradient-to-br ${gradient ?? 'from-amber-50 to-orange-50'} p-10 rounded-3xl border border-amber-100/50 hover-lift`}>
        <div className="text-5xl mb-5">{emoji}</div>
        <h3 className="text-xl font-bold mb-3 text-amber-950">{title}</h3>
        <p className="text-amber-800/60 leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-amber-100/50 hover-lift group">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">{emoji}</div>
      <h3 className="text-lg md:text-xl font-bold mb-3 text-amber-950">{title}</h3>
      <p className="text-amber-800/50 leading-relaxed">{description}</p>
    </div>
  );
}
