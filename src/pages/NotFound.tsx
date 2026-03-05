import { motion } from 'framer-motion';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  usePageMeta({
    title: '404 — Pagina Niet Gevonden | Shine & Drive',
    description: 'Deze pagina bestaat niet. Ga terug naar de homepage van Shine & Drive.',
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,254,0.1),transparent_70%)]" />
      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl font-extrabold text-primary sm:text-9xl">404</h1>
          <p className="mt-4 text-2xl font-bold text-text">Pagina Niet Gevonden</p>
          <p className="mt-2 text-text-muted">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/">
              Terug naar Home →
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
