import { motion } from 'framer-motion';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/utils';

export default function OverOns() {
  usePageMeta({
    title: 'Over Ons — Shine & Drive Zoetermeer',
    description: 'Leer meer over Shine & Drive, uw vertrouwde autogarage en detailing studio in Zoetermeer.',
  });

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center bg-surface pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,254,0.1),transparent_70%)]" />
        <Container className="relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-text sm:text-5xl md:text-6xl"
          >
            OVER <span className="text-primary">ONS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-text-muted"
          >
            Binnenkort beschikbaar — neem contact met ons op voor meer informatie
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button variant="primary" href={WHATSAPP_URL}>Neem Contact Op →</Button>
            <Button variant="outline" href="/">Terug naar Home</Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
