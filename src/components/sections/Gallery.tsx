import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { VideoCarousel } from '@/components/ui/VideoCarousel';
import { pexelsVideos, videoCategories } from '@/data/pexels-videos';
import { cn } from '@/lib/utils';

export function Gallery() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered =
    activeFilter === 'all'
      ? pexelsVideos
      : pexelsVideos.filter((v) => v.category === activeFilter);

  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <Container>
        <SectionHeading
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />

        {/* Category filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {videoCategories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                activeFilter === cat.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'border border-border bg-surface-card text-text-muted hover:border-primary/40 hover:text-text'
              )}
            >
              {t(`videoCategories.${cat.key}`)}
            </motion.button>
          ))}
        </div>
      </Container>

      {/* Full-width carousel — bleeds outside Container for edge-to-edge feel */}
      <div className="px-4 sm:px-6 lg:px-8">
        <VideoCarousel videos={filtered} />
      </div>

      <Container>
        <div className="mt-10 text-center">
          <Button variant="outline" href="/portfolio">
            {t('gallery.cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
