import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';

interface Brand {
  name: string;
  /** Simple Icons slug — served via cdn.simpleicons.org */
  slug?: string;
  /** Inline SVG data-URI for brands missing from Simple Icons */
  svgUri?: string;
}

/* Mercedes three-pointed star as a data-URI (not on Simple Icons) */
const mercedesSvg = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="29"/><line x1="32" y1="3" x2="32" y2="32"/><line x1="32" y1="32" x2="7.15" y2="46.35"/><line x1="32" y1="32" x2="56.85" y2="46.35"/><circle cx="32" cy="32" r="29"/></svg>`,
)}`;

const brands: Brand[] = [
  { name: 'Mercedes-Benz', svgUri: mercedesSvg },
  { name: 'BMW', slug: 'bmw' },
  { name: 'Audi', slug: 'audi' },
  { name: 'Porsche', slug: 'porsche' },
  { name: 'Lamborghini', slug: 'lamborghini' },
  { name: 'Ferrari', slug: 'ferrari' },
  { name: 'Bentley', slug: 'bentley' },
  { name: 'Rolls-Royce', slug: 'rollsroyce' },
  { name: 'Maserati', slug: 'maserati' },
  { name: 'Tesla', slug: 'tesla' },
  { name: 'Volkswagen', slug: 'volkswagen' },
  { name: 'Aston Martin', slug: 'astonmartin' },
];

export function BrandLogos() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-light py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-medium tracking-wide text-text-dim uppercase">
          {t('brandLogos.header')}
        </p>
      </Container>

      {/* Infinite scroll */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-surface-light to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-surface-light to-transparent" />

        <div className="flex animate-[scroll_45s_linear_infinite] hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.slug}-${i}`}
              className="mx-10 flex shrink-0 flex-col items-center justify-center gap-2.5 opacity-40 transition-opacity duration-300 hover:opacity-90"
            >
              <img
                src={brand.svgUri ?? `https://cdn.simpleicons.org/${brand.slug}/ffffff`}
                alt={brand.name}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
              <span className="whitespace-nowrap text-[10px] font-medium tracking-widest text-text-muted uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
