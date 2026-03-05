import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { VideoGrid, VideoCarousel } from '@/components/ui/VideoCarousel';
import { pexelsVideos, videoCategories } from '@/data/pexels-videos';
import { cn } from '@/lib/utils';

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered =
    activeFilter === 'all'
      ? pexelsVideos
      : pexelsVideos.filter((v) => v.category === activeFilter);

  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Ons **Werk**"
          subtitle="Van vuil naar showroom — bekijk de transformaties"
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
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Desktop: grid | Mobile: hidden (carousel below) */}
        <div className="hidden sm:block">
          <VideoGrid videos={filtered} />
        </div>

        {/* Mobile: horizontal scroll carousel */}
        <div className="sm:hidden">
          <VideoCarousel videos={filtered} />
        </div>

        {/* Pexels attribution */}
        <p className="mt-6 text-center text-xs text-text-dim">
          Video's door{' '}
          <a
            href="https://www.pexels.com/@pavel-danilyuk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-text-dim/30 transition-colors hover:text-primary"
          >
            Pavel Danilyuk
          </a>{' '}
          op Pexels
        </p>

        <div className="mt-10 text-center">
          <Button variant="outline" href="/portfolio">
            Bekijk portfolio →
          </Button>
        </div>
      </Container>
    </section>
  );
}
