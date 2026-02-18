import { Link } from '@/i18n/navigation';

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
  gradient = 'from-rojo via-rojo-dark to-rojo',
  id,
  className = '',
}: CTASectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-6 bg-gradient-to-r ${gradient} text-white text-center relative overflow-hidden ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amarillo/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        {subtitle && <p className="text-sm md:text-base mb-3 text-amarillo uppercase tracking-[0.2em] font-semibold">{subtitle}</p>}
        <h2 className="text-3xl md:text-5xl font-bold mb-5">{title}</h2>
        <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed">{description}</p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          {actions.map((action) => {
            const baseClasses = 'inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5';
            const variantClasses = action.variant === 'secondary'
              ? 'border border-white/20 text-white hover:bg-white/10'
              : action.className
                ? action.className
                : 'bg-white text-slate-900 hover:shadow-xl';

            return (
              <Link
                key={action.label}
                href={action.href}
                className={`${baseClasses} ${variantClasses}`}
              >
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
