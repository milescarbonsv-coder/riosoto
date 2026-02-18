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
  borderColor,
  variant = 'home',
  gradient,
}: FeatureCardProps) {
  if (variant === 'about') {
    return (
      <div className={`bg-gradient-to-br ${gradient ?? ''} p-10 rounded-2xl`}>
        <div className="text-5xl mb-5">{emoji}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300`}>
      <div className="text-4xl md:text-5xl mb-5">{emoji}</div>
      <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
