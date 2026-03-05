import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { getWhatsAppUrl } from '@/lib/utils';
import { showreelVideo } from '@/data/pexels-videos';

/**
 * Full-width cinematic video banner — ambient autoplay with overlay text.
 * Similar to dailyautocare.nl's hero video section.
 * Placed between WhyChooseUs and PricingSection for visual rhythm.
 */
export function VideoShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { t } = useTranslation();
  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  const handlePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.currentTime = 0;
    el.play();
    setHasInteracted(true);
  };

  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden sm:h-[70vh] lg:h-[80vh]">
      {/* Background video */}
      <video
        ref={videoRef}
        src={showreelVideo.videoHd}
        poster={showreelVideo.poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlays for text legibility */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-surface/80" />
      <div className="absolute inset-0 bg-linear-to-r from-surface/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 h-1 rounded-full bg-accent"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase"
            >
              {t('videoShowreel.eyebrow')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            >
              {t('videoShowreel.heading1')}
              <br />
              <span className="bg-linear-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                {t('videoShowreel.heading2')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-lg text-base text-white/70 sm:text-lg"
            >
              {t('videoShowreel.paragraph')}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg" href={whatsappUrl}>
                {t('videoShowreel.cta')}
              </Button>

              {!hasInteracted && (
                <button
                  onClick={handlePlay}
                  className="group flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-colors group-hover:border-white/60">
                    {/* Pulse ring */}
                    <span className="absolute inset-0 animate-ping rounded-full border border-white/20" />
                    <Play className="ml-0.5 h-5 w-5 fill-white" />
                  </span>
                  <span className="text-sm font-medium">{t('videoShowreel.playButton')}</span>
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom attribution (subtle) */}
      <div className="absolute right-4 bottom-3 z-10">
        <a
          href={showreelVideo.pexelsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-white/30 transition-colors hover:text-white/60"
        >
          Video: Pexels
        </a>
      </div>
    </section>
  );
}
