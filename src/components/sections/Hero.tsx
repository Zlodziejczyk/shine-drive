import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ParticleBackground } from '@/components/effects/ParticleBackground';
import { GradientOrb } from '@/components/effects/GradientOrb';
import { WHATSAPP_URL } from '@/lib/utils';
import { heroVideo } from '@/data/pexels-videos';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface">
      {/* Background video */}
      <video
        src={heroVideo.videoHd}
        poster={heroVideo.poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-surface via-surface/90 to-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,254,0.15),transparent_70%)]" />
      <ParticleBackground />
      <GradientOrb className="-top-20 -left-20" size="lg" color="purple" />
      <GradientOrb className="-bottom-20 -right-20" size="lg" color="gold" />

      <Container className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-lg font-bold tracking-[0.3em] uppercase text-text-muted">
            <span className="text-white">SHINE</span>
            <span className="text-accent"> & </span>
            <span className="text-primary">DRIVE</span>
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            JOUW AUTO, ONZE PASSIE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-text-muted sm:text-xl"
        >
          Van reparatie tot showroom-glans — alles onder één dak in Zoetermeer
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="primary" size="lg" href={WHATSAPP_URL}>
            Maak een Afspraak →
          </Button>
          <Button variant="outline" size="lg" href="/diensten">
            Bekijk Diensten →
          </Button>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-8 w-8 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
