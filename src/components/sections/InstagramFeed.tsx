import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { INSTAGRAM_URL } from '@/lib/utils';

const posts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Post ${i + 1}`,
}));

export function InstagramFeed() {
  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Volg Ons op **Instagram**"
          subtitle="@shine_drive_studio — Bekijk onze laatste projecten"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface-card to-surface-hover"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-text-dim transition-colors group-hover:text-primary" />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              {/* TODO: Replace with actual Instagram post images */}
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" href={INSTAGRAM_URL}>
            <Instagram className="h-5 w-5" />
            Volg op Instagram →
          </Button>
        </div>
      </Container>
    </section>
  );
}
