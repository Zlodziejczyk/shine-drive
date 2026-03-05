import { Container } from '@/components/ui/Container';

const brands = [
  'BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Toyota', 'Ford',
  'Opel', 'Peugeot', 'Renault', 'Kia', 'Hyundai', 'Tesla',
];

export function BrandLogos() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-light py-12">
      <Container>
        <p className="mb-8 text-center text-sm text-text-dim">
          Wij werken met alle merken
        </p>
      </Container>

      {/* Infinite scroll */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface-light to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface-light to-transparent" />

        <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="mx-8 flex shrink-0 items-center justify-center opacity-40 transition-opacity hover:opacity-80"
            >
              <span className="whitespace-nowrap text-lg font-bold tracking-wider text-text-muted">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
