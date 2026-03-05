import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/effects/AnimatedCounter';

export function Stats() {
  const { t } = useTranslation();

  const stats = [
    { end: 12, suffix: '+', labelKey: 'stats.experience' },
    { end: 5.0, suffix: '', labelKey: 'stats.rating', decimals: 1 },
    { end: 500, suffix: '+', labelKey: 'stats.cars' },
    { end: 3, suffix: '-in-1', labelKey: 'stats.allInOne' },
  ];
  return (
    <section className="relative border-y border-border bg-surface-light py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-extrabold text-accent md:text-4xl">
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <p className="mt-1 text-sm text-text-muted">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
