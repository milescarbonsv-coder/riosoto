interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({
  href,
  variant = 'primary',
  children,
  className = '',
}: CTAButtonProps) {
  const baseClasses = 'inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300';
  const variantClasses = variant === 'primary'
    ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg'
    : 'border border-white/40 text-white hover:bg-white/10';

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </a>
  );
}
