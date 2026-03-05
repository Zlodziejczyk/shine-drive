import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { INSTAGRAM_URL } from '@/lib/utils';

/*
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  HOW TO ADD REAL INSTAGRAM POSTS:
 *
 *  1. Go to an Instagram post in your browser
 *  2. Click the "..." menu → "Embed" → Copy the URL
 *  3. The shortcode is the part after /p/ or /reel/
 *     e.g. https://www.instagram.com/p/ABC123xyz/ → "ABC123xyz"
 *  4. Replace the shortcodes in the array below
 *  5. Update the thumbnail URLs with actual image URLs
 *     (right-click post image → Copy image address)
 *
 *  For a fully automated feed, consider:
 *  - Elfsight Instagram Widget (elfsight.com) — free tier available
 *  - Behold Instagram Widget (behold.so) — React-native widget
 *  - Instagram Basic Display API with a backend proxy
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

interface InstaPost {
  id: string;
  shortcode: string;
  caption: string;
  likes: number;
  comments: number;
  type: 'image' | 'reel' | 'carousel';
}

const instaPosts: InstaPost[] = [
  { id: '1', shortcode: 'DTksnvLgh5L', caption: 'Interieur reiniging — van vuil naar showroom 🧼✨', likes: 124, comments: 18, type: 'reel' },
  { id: '2', shortcode: 'DRKtW6Bgqrf', caption: 'Polijsten tot perfectie 💎🚗', likes: 203, comments: 31, type: 'reel' },
  { id: '3', shortcode: 'DQrbLM5CGjN', caption: 'Klassieke Mercedes — clean & detailed 🖤', likes: 156, comments: 22, type: 'image' },
  { id: '4', shortcode: 'DUOvwIZAmAt', caption: 'Mechanische reparatie — Audi RS6 🔧🏎️', likes: 145, comments: 19, type: 'reel' },
];

const USE_EMBEDS = false;

function InstagramPostEmbed({ shortcode }: { shortcode: string }) {
  return (
    <div className="relative h-[480px] w-full overflow-hidden">
      <iframe
        src={`https://www.instagram.com/p/${shortcode}/embed/`}
        className="absolute inset-0 h-[calc(100%+64px)] w-full border-0"
        loading="lazy"
        scrolling="no"
        allowTransparency
        allow="encrypted-media"
        title={`Instagram post ${shortcode}`}
      />
    </div>
  );
}

function InstagramPostPlaceholder({ post, index }: { post: InstaPost; index: number }) {
  const { t } = useTranslation();
  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ scale: 1.03 }}
      className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-linear-to-br from-surface-card via-surface-hover to-surface-card"
    >
      {/* Decorative shimmer overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-accent/5" />

      {/* Post type indicator */}
      {post.type === 'reel' && (
        <div className="absolute top-2 right-2 z-10 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
          {t('common.reel')}
        </div>
      )}
      {post.type === 'carousel' && (
        <div className="absolute top-2 right-2 z-10 rounded-md bg-black/50 px-1.5 py-0.5 backdrop-blur-sm">
          <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm0 14H8V4h12v12zM4 6H2v14a2 2 0 002 2h14v-2H4V6z" />
          </svg>
        </div>
      )}

      {/* Content: Instagram icon + caption */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] opacity-40 transition-opacity group-hover:opacity-70">
          <Instagram className="h-6 w-6 text-white" />
        </div>
        <p className="line-clamp-2 text-center text-xs text-text-dim transition-colors group-hover:text-text-muted">
          {t(`instagram.captions.${post.id}`)}
        </p>
      </div>

      {/* Hover overlay with stats */}
      <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-1.5 text-white">
          <Heart className="h-5 w-5 fill-white" />
          <span className="text-sm font-semibold">{post.likes}</span>
        </div>
        <div className="flex items-center gap-1.5 text-white">
          <MessageCircle className="h-5 w-5 fill-white" />
          <span className="text-sm font-semibold">{post.comments}</span>
        </div>
      </div>
    </motion.a>
  );
}

export function InstagramFeed() {
  const { t } = useTranslation();

  // Load Instagram embed script when using real embeds
  useEffect(() => {
    if (!USE_EMBEDS) return;
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <Container>
        <SectionHeading
          title={t('instagram.title')}
        />

        {/* Instagram profile header — like Daily Auto Care / Smash Balloon style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="-mt-6 mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* Avatar */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-0.5"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-surface-light">
              <span className="text-lg font-bold text-text">S&D</span>
            </div>
          </a>

          {/* Profile info */}
          <div className="text-center sm:text-left">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-bold text-text transition-colors hover:text-primary"
            >
              shine_drive_studio
              <ExternalLink className="h-4 w-4 text-text-dim" />
            </a>
            <p className="text-sm text-text-muted">
              {t('instagram.bio')}
            </p>
          </div>

          {/* Follow button */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t('common.follow')}
          </a>
        </motion.div>

        {/* Posts grid */}
        {USE_EMBEDS ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {instaPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-xl border border-border"
              >
                <InstagramPostEmbed shortcode={post.shortcode} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {instaPosts.map((post, i) => (
              <InstagramPostPlaceholder key={post.id} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Load more / Follow CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button variant="outline" href={INSTAGRAM_URL}>
            <Instagram className="h-5 w-5" />
            {t('common.followOnInstagram')}
          </Button>
          <span className="text-sm text-text-dim">@shine_drive_studio</span>
        </div>
      </Container>
    </section>
  );
}
