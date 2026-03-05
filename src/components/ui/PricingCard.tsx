import { cn, getWhatsAppUrl } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';
import type { PricingPackage } from '@/data/pricing';

interface PricingCardProps {
  pkg: PricingPackage;
  index: number;
  category: string;
}

export function PricingCard({ pkg, index, category }: PricingCardProps) {
  const { t } = useTranslation();

  const features = t(`pricing.${category}.${pkg.id}.features`, { returnObjects: true }) as string[];
  const waMessage = t(`pricing.${category}.${pkg.id}.whatsapp`);
  const ctaLink = getWhatsAppUrl(waMessage);
  const ctaText = category === 'detailing'
    ? t('common.bookPackage')
    : t('common.requestQuote');
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 md:p-8 transition-all duration-300',
        pkg.isPopular
          ? 'border-primary bg-surface-card shadow-lg shadow-primary/10 scale-[1.02] md:scale-105 z-10'
          : 'border-border bg-surface-card hover:border-primary/30',
      )}
    >
      {pkg.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="popular">{t('common.popular')}</Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-text">{t(`pricing.${category}.${pkg.id}.title`)}</h3>
        <div className="mt-3">
          <span className={cn(
            'text-4xl font-extrabold',
            pkg.isPopular ? 'text-accent' : 'text-text',
          )}>
            {pkg.price}
          </span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <span className="text-sm text-text-muted">{text}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={pkg.isPopular ? 'primary' : 'outline'}
        href={ctaLink}
        className="w-full"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
}
