import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getWhatsAppUrl } from '@/lib/utils';

export default function OverOns() {
  const { t } = useTranslation();
  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  usePageMeta({
    title: t('pages.overOns.metaTitle'),
    description: t('pages.overOns.metaDescription'),
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
            {t('pages.overOns.heading')} <span className="text-primary">{t('pages.overOns.headingHighlight')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-text-muted"
          >
            {t('common.comingSoon')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button variant="primary" href={whatsappUrl}>{t('common.contactUs')}</Button>
            <Button variant="outline" href="/">{t('common.backHome')}</Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
