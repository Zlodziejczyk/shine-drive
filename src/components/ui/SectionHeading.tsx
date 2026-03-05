import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

function parseTitle(title: string) {
  const parts = title.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="text-primary">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 md:mb-16', centered && 'text-center', className)}
    >
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
        {parseTitle(title)}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
