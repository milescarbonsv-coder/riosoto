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
      <div className={`bg-gradient-to-br ${gradient ?? ''} p-10 rounded-3xl border-t-4 ${borderColor}`}>
        <div className="text-6xl mb-6">{emoji}</div>
        <h3 className="text-2xl font-black mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition border-b-4 ${borderColor}`}>
      <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{emoji}</div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">{title}</h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-700">{description}</p>
    </div>
  );
}
