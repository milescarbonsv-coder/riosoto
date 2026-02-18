interface CTAAction {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  actions: CTAAction[];
  gradient?: string;
  id?: string;
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  description,
  actions,
  gradient = 'from-orange-500 to-pink-500',
  id,
  className = '',
}: CTASectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-gradient-to-r ${gradient} text-white text-center ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {subtitle && <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">{subtitle}</p>}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6">{title}</h2>
        <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex gap-3 sm:gap-4 justify-center flex-col sm:flex-row">
          {actions.map((action) => {
            const baseClasses = 'inline-block px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition';
            const variantClasses = action.variant === 'secondary'
              ? 'border-2 border-white text-white hover:bg-white hover:text-orange-600'
              : action.className
                ? action.className
                : 'bg-white text-orange-600 hover:shadow-lg transform hover:scale-105';

            return (
              <a
                key={action.href}
                href={action.href}
                className={`${baseClasses} ${variantClasses}`}
              >
                {action.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
