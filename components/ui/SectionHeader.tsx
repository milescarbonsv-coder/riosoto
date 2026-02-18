interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
  titleClassName = 'text-3xl md:text-5xl font-bold text-gray-900',
  subtitleClassName = 'text-gray-500 text-base md:text-lg',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && (
        <p className={`${subtitleClassName} mt-3 md:mt-4`}>{subtitle}</p>
      )}
    </div>
  );
}
