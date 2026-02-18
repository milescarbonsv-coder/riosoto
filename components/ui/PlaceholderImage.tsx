interface PlaceholderImageProps {
  emoji: string;
  gradient?: string;
  height?: string;
  emojiSize?: string;
  className?: string;
}

export function PlaceholderImage({
  emoji,
  gradient = 'from-amber-50 to-orange-50',
  height = 'h-48',
  emojiSize = 'text-7xl',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} ${height} flex items-center justify-center ${emojiSize} ${className}`}
      role="img"
      aria-label={emoji}
    >
      {emoji}
    </div>
  );
}
