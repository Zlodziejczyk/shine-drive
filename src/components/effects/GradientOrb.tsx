import { cn } from '@/lib/utils';

interface GradientOrbProps {
  className?: string;
  color?: 'purple' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-32 w-32',
  md: 'h-64 w-64',
  lg: 'h-96 w-96',
};

export function GradientOrb({ className, color = 'purple', size = 'md' }: GradientOrbProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full blur-3xl opacity-20',
        sizeMap[size],
        color === 'purple' && 'bg-primary',
        color === 'gold' && 'bg-accent',
        className,
      )}
      aria-hidden="true"
    />
  );
}
