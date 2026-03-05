import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Clock, MessageCircle, ChevronDown } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL, WHATSAPP_NUMBER, ADDRESS } from '@/lib/utils';

const hours = [
  { day: 'Maandag', time: 'Op afspraak' },
  { day: 'Dinsdag', time: 'Op afspraak' },
  { day: 'Woensdag', time: 'Op afspraak' },
  { day: 'Donderdag', time: '09:00 – 18:00' },
  { day: 'Vrijdag', time: '09:00 – 18:00' },
  { day: 'Zaterdag', time: '09:00 – 18:00' },
  { day: 'Zondag', time: 'Gesloten' },
];

const faqs = [
  {
    q: 'Hoe kan ik een afspraak maken?',
    a: 'U kunt eenvoudig een afspraak maken via WhatsApp, telefonisch of via ons contactformulier. Wij reageren meestal binnen een uur.',
  },
  {
    q: 'Bieden jullie ook ophaal- en brengservice?',
    a: 'Ja, wij bieden een mobiele service aan. Neem contact met ons op voor de mogelijkheden in uw regio.',
  },
  {
    q: 'Hoe lang duurt een detailing behandeling?',
    a: 'Een basis reiniging duurt gemiddeld 2-3 uur. Premium en exclusive behandelingen kunnen 4-8 uur duren, afhankelijk van de staat van uw auto.',
  },
  {
    q: 'Geven jullie garantie op car wrapping?',
    a: 'Ja, wij geven 3+ jaar garantie op een volledige wrap en 5+ jaar op onze Premium Wrap + PPF pakketten.',
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left cursor-pointer"
      >
        <span className="font-medium text-text">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-text-muted transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-sm text-text-muted">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  usePageMeta({
    title: 'Contact — Shine & Drive Zoetermeer',
    description:
      'Neem contact op met Shine & Drive. Bel, WhatsApp of bezoek ons op Industrieweg 6E, Zoetermeer.',
  });

  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[35vh] items-center justify-center bg-surface pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,254,0.1),transparent_70%)]" />
        <Container className="relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-text sm:text-5xl md:text-6xl"
          >
            <span className="text-primary">CONTACT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-text-muted"
          >
            Wij helpen u graag — neem vandaag nog contact op
          </motion.p>
        </Container>
      </section>

      {/* Contact content */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left — Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-text">Stuur ons een bericht</h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-text-muted">Naam</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Uw naam"
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-text-muted">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="uw@email.nl"
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-text-muted">Telefoon</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="06-12345678"
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1 block text-sm text-text-muted">Dienst</label>
                  <select
                    id="service"
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="detailing">Auto Detailing</option>
                    <option value="wrapping">Car Wrapping</option>
                    <option value="reparatie">Algemene Reparaties</option>
                    <option value="elektro">Elektromechanische Reparaties</option>
                    <option value="tuning">Mechanisch Tuning</option>
                    <option value="mobiel">Mobiele Service</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-text-muted">Bericht</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Vertel ons meer over uw wensen..."
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  Verstuur Bericht
                </Button>
              </form>
            </motion.div>

            {/* Right — Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-card p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-text">Adres</p>
                    <p className="text-sm text-text-muted">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-card p-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-text">Telefoon / WhatsApp</p>
                    <p className="text-sm text-text-muted">{WHATSAPP_NUMBER}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-card p-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-text">Openingstijden</p>
                    <p className="text-sm text-text-muted">Do–Za: 09:00–18:00 / Overige dagen op afspraak</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Button variant="whatsapp" size="lg" href={WHATSAPP_URL} className="w-full">
                <MessageCircle className="h-5 w-5" />
                Direct via WhatsApp →
              </Button>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.5!2d4.47!3d52.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAzJzM2LjAiTiA0wrAyOCcxMi4wIkU!5e0!3m2!1snl!2snl!4v1"
                  className="h-64 w-full border-0 grayscale invert-[0.9]"
                  allowFullScreen
                  loading="lazy"
                  title="Shine & Drive locatie"
                />
              </div>

              {/* Hours table */}
              <div className="rounded-2xl border border-border bg-surface-card p-4">
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
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-light py-16 md:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-text sm:text-3xl">
            Veelgestelde <span className="text-primary">Vragen</span>
          </h2>
          <div className="rounded-2xl border border-border bg-surface-card p-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
