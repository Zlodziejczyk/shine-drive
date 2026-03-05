import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const galleryItems = [
  { id: 1, label: 'Detailing — BMW 3 Serie' },
  { id: 2, label: 'Full Wrap — Mercedes C-Klasse' },
  { id: 3, label: 'Interieur Reiniging — Audi A4' },
  { id: 4, label: 'Lakcorrectie — VW Golf' },
  { id: 5, label: 'PPF Bescherming — Tesla Model 3' },
  { id: 6, label: 'Motor Detailing — Ford Mustang' },
];

export function Gallery() {
  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Ons **Werk**"
          subtitle="Van vuil naar showroom — bekijk de transformaties"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-card to-surface-hover"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-text">{item.label}</p>
                  <p className="mt-1 text-xs text-text-dim">Before / After</p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
              {/* TODO: Replace with actual before/after images */}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" href="/portfolio">
            Bekijk portfolio →
          </Button>
        </div>
      </Container>
    </section>
  );
}
