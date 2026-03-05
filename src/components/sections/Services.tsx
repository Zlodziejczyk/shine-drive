import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

export function Services() {
  return (
    <section className="relative bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Onze **Diensten**"
          subtitle="Van volledige detailing tot car wrapping en mechanische reparaties — wij doen het allemaal."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-text-muted">
            Niet zeker welke dienst u nodig heeft?
          </p>
          <Button variant="outline" href="/contact">
            Neem contact op →
          </Button>
        </div>
      </Container>
    </section>
  );
}
