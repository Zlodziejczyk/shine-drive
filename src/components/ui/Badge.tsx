import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'popular' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold',
        variant === 'default' && 'bg-primary/10 text-primary',
        variant === 'popular' &&
          'bg-gradient-to-r from-accent to-accent-light text-surface animate-shimmer bg-[length:200%_100%]',
        variant === 'accent' && 'bg-accent/10 text-accent',
        className,
      )}
    >
      {children}
    </span>
  );
}
