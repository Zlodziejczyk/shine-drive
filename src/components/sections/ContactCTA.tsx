import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL, WHATSAPP_NUMBER, ADDRESS } from '@/lib/utils';

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: ADDRESS },
  { icon: Phone, label: 'Telefoon', value: WHATSAPP_NUMBER },
  { icon: Clock, label: 'Openingstijden', value: 'Do–Za: 09:00–18:00' },
];

const hours = [
  { day: 'Maandag', time: 'Op afspraak' },
  { day: 'Dinsdag', time: 'Op afspraak' },
  { day: 'Woensdag', time: 'Op afspraak' },
  { day: 'Donderdag', time: '09:00 – 18:00' },
  { day: 'Vrijdag', time: '09:00 – 18:00' },
  { day: 'Zaterdag', time: '09:00 – 18:00' },
  { day: 'Zondag', time: 'Gesloten' },
];

export function ContactCTA() {
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
            Klaar om uw Auto te Laten <span className="text-primary">Shinen</span>?
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Neem vandaag nog contact op — wij helpen u graag!
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
              <h4 className="mb-3 font-semibold text-text">Openingstijden</h4>
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
            <Button variant="whatsapp" size="lg" href={WHATSAPP_URL} className="w-full">
              <MessageCircle className="h-5 w-5" />
              Chat via WhatsApp →
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.5!2d4.47!3d52.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAzJzM2LjAiTiA0wrAyOCcxMi4wIkU!5e0!3m2!1snl!2snl!4v1"
              className="h-full min-h-[400px] w-full border-0 grayscale invert-[0.9]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shine & Drive locatie"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
