import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Review } from '@/data/reviews';

interface ReviewCardProps {
  review: Review;
  index: number;
}

export function ReviewCard({ review, index }: ReviewCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="min-w-[300px] max-w-[350px] shrink-0 rounded-2xl border border-border bg-surface-card p-6"
    >
      <div className="mb-3 flex gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="mb-4 text-sm italic text-text-muted">"{t(`reviews.${review.id}`)}"</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-text">{review.name}</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
          {review.source}
        </span>
      </div>
    </motion.div>
  );
}
