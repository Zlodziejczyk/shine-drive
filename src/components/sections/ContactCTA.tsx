import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getWhatsAppUrl, WHATSAPP_NUMBER, ADDRESS } from '@/lib/utils';

export function ContactCTA() {
  const { t } = useTranslation();
  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  const contactInfo = [
    { icon: MapPin, label: t('common.address'), value: ADDRESS },
    { icon: Phone, label: t('common.phone'), value: WHATSAPP_NUMBER },
    { icon: Clock, label: t('common.openingHours'), value: t('common.thuSat') },
  ];

  const hours = [
    { day: t('hours.monday'), time: t('hours.byAppointment') },
    { day: t('hours.tuesday'), time: t('hours.byAppointment') },
    { day: t('hours.wednesday'), time: t('hours.byAppointment') },
    { day: t('hours.thursday'), time: t('hours.regular') },
    { day: t('hours.friday'), time: t('hours.regular') },
    { day: t('hours.saturday'), time: t('hours.regular') },
    { day: t('hours.sunday'), time: t('hours.closed') },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-surface to-accent/10 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,47,254,0.15),transparent_60%)]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            {t('contactCTA.heading')} <span className="text-primary">{t('contactCTA.headingHighlight')}</span>?
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            {t('contactCTA.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">{item.label}</p>
                    <p className="text-text">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Hours table */}
            <div className="mt-6 rounded-2xl border border-border bg-surface-card p-4">
              <h4 className="mb-3 font-semibold text-text">{t('common.openingHours')}</h4>
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between border-b border-border py-2 last:border-0"
                >
                  <span className="text-sm text-text-muted">{h.day}</span>
                  <span className="text-sm font-medium text-text">{h.time}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="lg" href={whatsappUrl} className="w-full">
              <MessageCircle className="h-5 w-5" />
              {t('common.whatsappChat')}
            </Button>
          </motion.div>

          {/* Right — Google Maps placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.2!2d4.5069211!3d52.0482245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cecee9c12487%3A0x8d3037719600177!2sIndustrieweg%206%2C%202712%20LB%20Zoetermeer!5e0!3m2!1snl!2snl!4v1"
              className="h-full min-h-[400px] w-full border-0 grayscale invert-[0.9]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('common.mapTitle')}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
