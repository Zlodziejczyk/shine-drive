import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

export function Services() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-text-muted">
            {t('services.notSure')}
          </p>
          <Button variant="outline" href="/contact">
            {t('services.contactUs')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
