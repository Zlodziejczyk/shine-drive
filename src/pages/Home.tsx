import { usePageMeta } from '@/hooks/usePageMeta';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { PricingSection } from '@/components/sections/PricingSection';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { BrandLogos } from '@/components/sections/BrandLogos';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  usePageMeta({
    title: 'Shine & Drive — Autogarage, Detailing & Car Wrapping in Zoetermeer',
    description:
      'De enige garage + detailing + wrapping studio in Zoetermeer. 12+ jaar ervaring, 5.0★ beoordeling. Reparatie, detailing en car wrapping onder één dak. Bel 06-31793774.',
  });

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <PricingSection />
      <Gallery />
      <Reviews />
      <BrandLogos />
      <InstagramFeed />
      <ContactCTA />
    </>
  );
}
