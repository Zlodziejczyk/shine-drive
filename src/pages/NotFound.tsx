import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  const { t } = useTranslation();

  usePageMeta({
    title: t('pages.notFound.metaTitle'),
    description: t('pages.notFound.metaDescription'),
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
          <h1 className="text-8xl font-extrabold text-primary sm:text-9xl">{t('pages.notFound.heading')}</h1>
          <p className="mt-4 text-2xl font-bold text-text">{t('pages.notFound.subheading')}</p>
          <p className="mt-2 text-text-muted">
            {t('pages.notFound.text')}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/">
              {t('pages.notFound.cta')}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
