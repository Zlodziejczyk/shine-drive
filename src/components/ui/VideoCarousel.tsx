import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PexelsVideo } from '@/data/pexels-videos';

interface VideoCardProps {
  video: PexelsVideo;
  index: number;
  onExpand: (video: PexelsVideo) => void;
}

function VideoCard({ video, index, onExpand }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play when card scrolls into view, pause when it leaves
  useEffect(() => {
    const el = videoRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group"
    >
      {/* Video container */}
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-card">
        <video
          ref={videoRef}
          src={video.videoHd}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Bottom-right controls (visible on hover) */}
        <div className="absolute right-2 bottom-2 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          {isPlaying && (
            <button
              onClick={togglePlay}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              aria-label="Pauzeren"
            >
              <Pause className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            aria-label={isMuted ? 'Geluid aan' : 'Geluid uit'}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => onExpand(video)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            aria-label="Vergroten"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Category badge — stays on top of video */}
        <div className="absolute top-3 left-3">
          <span className="rounded-md bg-primary/80 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            {video.category}
          </span>
        </div>
      </div>

      {/* Title below the video */}
      <div className="mt-2.5 px-1">
        <p className="text-sm font-medium text-text">{video.title}</p>
        <p className="text-xs text-text-dim">{video.duration}s</p>
      </div>
    </motion.div>
  );
}

/* ━━━━━━━━━━━━━ Lightbox ━━━━━━━━━━━━━ */

function VideoLightbox({ video, onClose }: { video: PexelsVideo; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative mx-4 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={video.videoHd}
          poster={video.poster}
          autoPlay
          controls
          playsInline
          className="w-full rounded-2xl"
        />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface-card text-text shadow-lg transition-colors hover:bg-primary hover:text-white"
          aria-label="Sluiten"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mt-3 text-center">
          <p className="text-sm font-medium text-white">{video.title}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ━━━━━━━━━━━━━ Carousel Strip (horizontal scroll) ━━━━━━━━━━━━━ */

interface VideoCarouselStripProps {
  videos: PexelsVideo[];
  onExpand: (video: PexelsVideo) => void;
}

function VideoCarouselStrip({ videos, onExpand }: VideoCarouselStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 -left-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-card/90 text-text shadow-lg backdrop-blur-sm transition-colors hover:bg-primary hover:text-white lg:flex"
        aria-label="Vorige"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 -right-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-card/90 text-text shadow-lg backdrop-blur-sm transition-colors hover:bg-primary hover:text-white lg:flex"
        aria-label="Volgende"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {videos.map((video, i) => (
          <div key={video.id} className="w-[88vw] flex-shrink-0 snap-start sm:w-[55vw] lg:w-[38vw] xl:w-[30vw]">
            <VideoCard video={video} index={i} onExpand={onExpand} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━ Grid View ━━━━━━━━━━━━━ */

interface VideoGridProps {
  videos: PexelsVideo[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  const [lightboxVideo, setLightboxVideo] = useState<PexelsVideo | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} onExpand={setLightboxVideo} />
        ))}
      </div>

      <AnimatePresence>
        {lightboxVideo && (
          <VideoLightbox video={lightboxVideo} onClose={() => setLightboxVideo(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

/* ━━━━━━━━━━━━━ Carousel View ━━━━━━━━━━━━━ */

interface VideoCarouselProps {
  videos: PexelsVideo[];
  className?: string;
}

export function VideoCarousel({ videos, className }: VideoCarouselProps) {
  const [lightboxVideo, setLightboxVideo] = useState<PexelsVideo | null>(null);

  return (
    <div className={cn(className)}>
      <VideoCarouselStrip videos={videos} onExpand={setLightboxVideo} />

      <AnimatePresence>
        {lightboxVideo && (
          <VideoLightbox video={lightboxVideo} onClose={() => setLightboxVideo(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
