import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { PricingCard } from '@/components/ui/PricingCard';
import { Button } from '@/components/ui/Button';
import { detailingPackages, wrappingPackages } from '@/data/pricing';
import { getWhatsAppUrl } from '@/lib/utils';

export default function Pakketten() {
  const { t } = useTranslation();
  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  usePageMeta({
    title: t('pages.pakketten.metaTitle'),
    description: t('pages.pakketten.metaDescription'),
  });

  const tabs = [
    { id: 'detailing', labelKey: 'pricing.tabDetailing' },
    { id: 'wrapping', labelKey: 'pricing.tabWrapping' },
    { id: 'reparatie', labelKey: 'pricing.tabReparatie' },
  ];

  const [activeTab, setActiveTab] = useState('detailing');

  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-surface pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,254,0.1),transparent_70%)]" />
        <Container className="relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-text sm:text-5xl md:text-6xl"
          >
            {t('pages.pakketten.heading')} <span className="text-primary">{t('pages.pakketten.headingHighlight')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-text-muted"
          >
            {t('pages.pakketten.subtitle')}
          </motion.p>
        </Container>
      </section>

      {/* Pricing content */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          {/* Tab Switcher */}
          <div className="mb-12 flex justify-center">
            <div className="relative inline-flex rounded-full border border-border bg-surface-light p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                    activeTab === tab.id ? 'text-white' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="pakkettenTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-light"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{t(tab.labelKey)}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'detailing' && (
              <motion.div
                key="detailing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {detailingPackages.map((pkg, i) => (
                  <PricingCard key={pkg.id} pkg={pkg} index={i} category={activeTab} />
                ))}
              </motion.div>
            )}

            {activeTab === 'wrapping' && (
              <motion.div
                key="wrapping"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {wrappingPackages.map((pkg, i) => (
                  <PricingCard key={pkg.id} pkg={pkg} index={i} category={activeTab} />
                ))}
              </motion.div>
            )}

            {activeTab === 'reparatie' && (
              <motion.div
                key="reparatie"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-2xl"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-surface-card">
                  {(t('pricing.mechanical', { returnObjects: true }) as { name: string; price: string }[]).map((service, i, arr) => (
                    <div
                      key={service.name}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i !== arr.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <span className="text-text">{service.name}</span>
                      <span className="font-semibold text-accent">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-surface-light py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-text sm:text-3xl">
            {t('pages.pakketten.readyToBook')} <span className="text-primary">{t('pages.pakketten.readyToBookHighlight')}</span>?
          </h2>
          <p className="mt-3 text-text-muted">
            {t('pages.pakketten.readyToBookText')}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={whatsappUrl}>
              {t('common.makeAppointment')}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
