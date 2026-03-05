import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { reviews } from '@/data/reviews';

export function Reviews() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          title={t('reviews.title')}
        />

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="-mt-8 mb-12 flex items-center justify-center gap-2"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-lg font-bold text-text">5.0 / 5</span>
          <span className="text-text-muted">{t('reviews.ratingText')}</span>
        </motion.div>

        {/* Scroll controls */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-surface-card p-2 text-text-muted hover:bg-surface-hover hover:text-text md:block cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-surface-card p-2 text-text-muted hover:bg-surface-hover hover:text-text md:block cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Review cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, i) => (
              <div key={review.id} className="snap-start">
                <ReviewCard review={review} index={i} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
