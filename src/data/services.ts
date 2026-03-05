import { Sparkles, Palette, Wrench, Zap, Gauge, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

export const services: Service[] = [
  {
    id: 'detailing',
    title: 'Auto Detailing',
    description: 'Professionele reiniging van interieur en exterieur, lakcorrectie, coating en polijsten.',
    icon: Sparkles,
    slug: 'auto-detailing',
  },
  {
    id: 'wrapping',
    title: 'Car Wrapping',
    description: 'Volledige en gedeeltelijke wraps, kleurverandering en beschermingsfolie.',
    icon: Palette,
    slug: 'car-wrapping',
  },
  {
    id: 'reparaties',
    title: 'Algemene Reparaties',
    description: 'Onderhoud, remmen, olie, banden en APK-voorbereiding.',
    icon: Wrench,
    slug: 'algemene-reparaties',
  },
  {
    id: 'elektromechanisch',
    title: 'Elektromechanische Reparaties',
    description: 'Diagnose en reparatie van elektrische en mechanische systemen.',
    icon: Zap,
    slug: 'elektromechanische-reparaties',
  },
  {
    id: 'tuning',
    title: 'Mechanisch Tuning',
    description: 'Motor tuning, prestatieverbetering en chiptuning.',
    icon: Gauge,
    slug: 'mechanisch-tuning',
  },
  {
    id: 'mobiel',
    title: 'Mobiele Service',
    description: 'Wij komen naar u toe — detailing en reparatie op locatie.',
    icon: MapPin,
    slug: 'mobiele-service',
  },
];
