import { Container } from '@/components/ui/Container';

interface Brand {
  name: string;
  logo: React.ReactNode;
}

/* ─── Premium car brand SVG logos (monochrome, currentColor) ─── */

const MercedesLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" className="h-12 w-12">
    <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="3" />
    <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1.5" />
    <path d="M40 8 L40 40 L12 62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 40 L68 62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 62 L68 62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const BMWLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" className="h-12 w-12">
    <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="3" />
    <line x1="40" y1="3" x2="40" y2="77" stroke="currentColor" strokeWidth="2" />
    <line x1="3" y1="40" x2="77" y2="40" stroke="currentColor" strokeWidth="2" />
    <path d="M40 3 A37 37 0 0 1 77 40 L40 40 Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M3 40 A37 37 0 0 1 40 77 L40 40 Z" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

const AudiLogo = () => (
  <svg viewBox="0 0 160 50" fill="none" className="h-8 w-auto">
    <circle cx="30" cy="25" r="18" stroke="currentColor" strokeWidth="3" />
    <circle cx="60" cy="25" r="18" stroke="currentColor" strokeWidth="3" />
    <circle cx="90" cy="25" r="18" stroke="currentColor" strokeWidth="3" />
    <circle cx="120" cy="25" r="18" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const PorscheLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" className="h-12 w-12">
    <rect x="6" y="6" width="68" height="68" rx="4" stroke="currentColor" strokeWidth="3" />
    <text x="40" y="48" textAnchor="middle" fill="currentColor" fontSize="22" fontWeight="bold" fontFamily="serif">P</text>
    <line x1="6" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="2" />
    <line x1="60" y1="40" x2="74" y2="40" stroke="currentColor" strokeWidth="2" />
    <line x1="40" y1="6" x2="40" y2="20" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const AMGLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" className="h-8 w-auto">
    <text x="60" y="30" textAnchor="middle" fill="currentColor" fontSize="28" fontWeight="900" fontFamily="sans-serif" letterSpacing="6">AMG</text>
  </svg>
);

const RSLogo = () => (
  <svg viewBox="0 0 90 40" fill="none" className="h-8 w-auto">
    <text x="45" y="30" textAnchor="middle" fill="currentColor" fontSize="28" fontWeight="900" fontFamily="sans-serif" letterSpacing="4">RS</text>
    <line x1="5" y1="36" x2="85" y2="36" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const BrabusLogo = () => (
  <svg viewBox="0 0 140 40" fill="none" className="h-8 w-auto">
    <text x="70" y="28" textAnchor="middle" fill="currentColor" fontSize="22" fontWeight="800" fontFamily="sans-serif" letterSpacing="8">BRABUS</text>
    <line x1="10" y1="35" x2="130" y2="35" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="5" x2="130" y2="5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const TeslaLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" className="h-12 w-12">
    <path d="M40 10 L40 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M15 18 Q27 28 40 10 Q53 28 65 18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

const VolkswagenLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" className="h-12 w-12">
    <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="3" />
    <path d="M22 20 L34 55 L40 38 L46 55 L58 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const LamborghiniLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" className="h-12 w-12">
    <rect x="4" y="18" width="72" height="44" rx="22" stroke="currentColor" strokeWidth="3" />
    <path d="M32 52 Q40 26 48 52" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="40" cy="34" r="3" fill="currentColor" />
    <line x1="34" y1="46" x2="46" y2="46" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const RangeRoverLogo = () => (
  <svg viewBox="0 0 180 36" fill="none" className="h-7 w-auto">
    <text x="90" y="26" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600" fontFamily="serif" letterSpacing="7">RANGE ROVER</text>
  </svg>
);

const MaseratiLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" className="h-12 w-12">
    <path d="M40 10 L40 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M30 16 L40 10 L50 16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 22 L30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M56 22 L50 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="40" cy="52" rx="24" ry="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
  </svg>
);

const brands: Brand[] = [
  { name: 'Mercedes-Benz', logo: <MercedesLogo /> },
  { name: 'BMW', logo: <BMWLogo /> },
  { name: 'Audi', logo: <AudiLogo /> },
  { name: 'AMG', logo: <AMGLogo /> },
  { name: 'Audi RS', logo: <RSLogo /> },
  { name: 'Porsche', logo: <PorscheLogo /> },
  { name: 'Brabus', logo: <BrabusLogo /> },
  { name: 'Tesla', logo: <TeslaLogo /> },
  { name: 'Lamborghini', logo: <LamborghiniLogo /> },
  { name: 'Volkswagen', logo: <VolkswagenLogo /> },
  { name: 'Range Rover', logo: <RangeRoverLogo /> },
  { name: 'Maserati', logo: <MaseratiLogo /> },
];

export function BrandLogos() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-light py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-medium tracking-wide text-text-dim uppercase">
          Premium merken — wij werken ermee
        </p>
      </Container>

      {/* Infinite scroll */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-surface-light to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-surface-light to-transparent" />

        <div className="flex animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="mx-10 flex shrink-0 flex-col items-center justify-center gap-2 text-text-muted opacity-40 transition-opacity duration-300 hover:opacity-90"
            >
              {brand.logo}
              <span className="whitespace-nowrap text-[10px] font-medium tracking-widest uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
