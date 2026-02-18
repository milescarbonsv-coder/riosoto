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
  gradient = 'from-gray-900 to-gray-800',
  id,
  className = '',
}: CTASectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 bg-gradient-to-r ${gradient} text-white text-center ${className}`}
    >
      <div className="max-w-3xl mx-auto">
        {subtitle && <p className="text-sm md:text-base mb-3 opacity-80 uppercase tracking-wide">{subtitle}</p>}
        <h2 className="text-3xl md:text-5xl font-bold mb-5">{title}</h2>
        <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">{description}</p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          {actions.map((action) => {
            const baseClasses = 'inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300';
            const variantClasses = action.variant === 'secondary'
              ? 'border border-white/40 text-white hover:bg-white/10'
              : action.className
                ? action.className
                : 'bg-white text-gray-900 hover:shadow-lg';

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
