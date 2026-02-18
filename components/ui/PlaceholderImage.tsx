interface PlaceholderImageProps {
  emoji: string;
  gradient?: string;
  height?: string;
  emojiSize?: string;
  className?: string;
}

export function PlaceholderImage({
  emoji,
  gradient = 'from-gray-50 to-gray-100',
  height = 'h-44',
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
