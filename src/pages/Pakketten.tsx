import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { PricingCard } from '@/components/ui/PricingCard';
import { Button } from '@/components/ui/Button';
import { detailingPackages, wrappingPackages, mechanicalServices } from '@/data/pricing';
import { WHATSAPP_URL } from '@/lib/utils';

const tabs = [
  { id: 'detailing', label: '🚗 Detailing' },
  { id: 'wrapping', label: '🎨 Wrapping' },
  { id: 'reparatie', label: '🔧 Reparatie' },
];

export default function Pakketten() {
  usePageMeta({
    title: 'Pakketten — Shine & Drive Zoetermeer',
    description:
      'Bekijk onze detailing, car wrapping en reparatie pakketten. Transparante prijzen, premium kwaliteit.',
  });

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
            ONZE <span className="text-primary">PAKKETTEN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-text-muted"
          >
            Transparante prijzen, premium kwaliteit
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
                  <span className="relative z-10">{tab.label}</span>
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
                  <PricingCard key={pkg.id} pkg={pkg} index={i} />
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
                  <PricingCard key={pkg.id} pkg={pkg} index={i} />
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
                  {mechanicalServices.map((service, i) => (
                    <div
                      key={service.name}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i !== mechanicalServices.length - 1 ? 'border-b border-border' : ''
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
            Klaar om te <span className="text-primary">boeken</span>?
          </h2>
          <p className="mt-3 text-text-muted">
            Neem contact op en wij plannen uw afspraak in.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={WHATSAPP_URL}>
              Maak een Afspraak →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
