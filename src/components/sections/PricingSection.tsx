import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PricingCard } from '@/components/ui/PricingCard';
import { Button } from '@/components/ui/Button';
import {
  detailingPackages,
  wrappingPackages,
} from '@/data/pricing';

export function PricingSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('detailing');

  const tabs = [
    { id: 'detailing', labelKey: 'pricing.tabDetailing' },
    { id: 'wrapping', labelKey: 'pricing.tabWrapping' },
  ];

  const packages = activeTab === 'detailing' ? detailingPackages : wrappingPackages;

  return (
    <section className="relative bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />

        {/* Tab Switcher */}
        <div className="mb-12 flex justify-center">
          <div className="relative inline-flex rounded-full border border-border bg-surface-light p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeTab === tab.id ? 'text-white' : 'text-text-muted hover:text-text'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-light"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{t(tab.labelKey)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {packages.map((pkg, i) => (
              <PricingCard key={pkg.id} pkg={pkg} index={i} category={activeTab} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Button variant="ghost" href="/pakketten">
            {t('pricing.viewAll')}
          </Button>
        </div>

        {/* Mechanical Services Table */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold text-text">
            {t('pricing.mechanicalTitle')} <span className="text-primary">{t('pricing.mechanicalHighlight')}</span>
          </h3>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface-card">
            {(t('pricing.mechanical', { returnObjects: true }) as { name: string; price: string }[]).map((item, i, arr) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex items-center justify-between px-6 py-4 ${
                  i !== arr.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="text-text">{item.name}</span>
                <span className="font-semibold text-accent">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
