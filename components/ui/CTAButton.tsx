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
  const baseClasses = 'inline-block px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition';
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-105'
    : 'border-2 border-white text-white hover:bg-white hover:text-orange-600';

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </a>
  );
}
