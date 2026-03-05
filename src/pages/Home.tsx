import { useTranslation } from 'react-i18next';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { VideoShowreel } from '@/components/sections/VideoShowreel';
import { PricingSection } from '@/components/sections/PricingSection';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { BrandLogos } from '@/components/sections/BrandLogos';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  const { t } = useTranslation();

  usePageMeta({
    title: t('pages.home.metaTitle'),
    description: t('pages.home.metaDescription'),
  });

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <VideoShowreel />
      <PricingSection />
      <Gallery />
      <Reviews />
      <BrandLogos />
      <InstagramFeed />
      <ContactCTA />
    </>
  );
}
