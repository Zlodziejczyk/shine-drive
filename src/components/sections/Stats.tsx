import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/effects/AnimatedCounter';

const stats = [
  { end: 12, suffix: '+', label: 'Jaar Ervaring' },
  { end: 5.0, suffix: '', label: 'Klantbeoordeling ⭐', decimals: 1 },
  { end: 500, suffix: '+', label: "Auto's Behandeld" },
  { end: 3, suffix: '-in-1', label: 'Garage + Detailing + Wrapping' },
];

export function Stats() {
  return (
    <section className="relative border-y border-border bg-surface-light py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
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
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
