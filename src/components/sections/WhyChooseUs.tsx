import { motion } from 'framer-motion';
import { Trophy, Star, Camera, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = [
    { icon: Trophy, titleKey: 'whyChooseUs.allInOne.title', descKey: 'whyChooseUs.allInOne.description' },
    { icon: Star, titleKey: 'whyChooseUs.experience.title', descKey: 'whyChooseUs.experience.description' },
    { icon: Camera, titleKey: 'whyChooseUs.transparent.title', descKey: 'whyChooseUs.transparent.description' },
    { icon: Clock, titleKey: 'whyChooseUs.flexible.title', descKey: 'whyChooseUs.flexible.description' },
  ];
  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <Container>
        <SectionHeading
          title={t('whyChooseUs.title')}
          subtitle={t('whyChooseUs.subtitle')}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-surface-card p-6 text-center"
              >
                {/* Gold top accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent-light" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-text">{t(reason.titleKey)}</h3>
                <p className="text-sm text-text-muted">{t(reason.descKey)}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
