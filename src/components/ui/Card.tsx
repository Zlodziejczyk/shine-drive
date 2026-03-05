import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl border border-border bg-surface-card p-6 transition-all duration-300',
        hover && 'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
        className,
      )}
      whileHover={hover ? { y: -8 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
