import { motion } from 'framer-motion';
import { Trophy, Star, Camera, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: Trophy,
    title: 'Alles-in-Één',
    description: 'Reparatie, detailing én wrapping onder één dak',
  },
  {
    icon: Star,
    title: '12+ Jaar Ervaring',
    description: 'Al meer dan een decennium vertrouwd in Zoetermeer',
  },
  {
    icon: Camera,
    title: 'Transparante Service',
    description: "Foto's en factuur bij elke dienst — geen verrassingen",
  },
  {
    icon: Clock,
    title: 'Flexibel & Snel',
    description: 'Op afspraak ook buiten openingstijden beschikbaar',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Waarom Kiezen voor **Shine & Drive**?"
          subtitle="Ontdek waarom wij de beste keuze zijn voor uw auto in Zoetermeer"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
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
                <h3 className="mb-2 text-lg font-bold text-text">{reason.title}</h3>
                <p className="text-sm text-text-muted">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
