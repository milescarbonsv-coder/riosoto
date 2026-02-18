interface PlaceholderImageProps {
  emoji: string;
  gradient?: string;
  height?: string;
  emojiSize?: string;
  className?: string;
}

export function PlaceholderImage({
  emoji,
  gradient = 'from-orange-100 to-pink-100',
  height = 'h-40',
  emojiSize = 'text-8xl',
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
