import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Clock, MessageCircle, ChevronDown } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getWhatsAppUrl, WHATSAPP_NUMBER, ADDRESS } from '@/lib/utils';

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
  const { t } = useTranslation();
  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  const hours = [
    { day: t('hours.monday'), time: t('hours.byAppointment') },
    { day: t('hours.tuesday'), time: t('hours.byAppointment') },
    { day: t('hours.wednesday'), time: t('hours.byAppointment') },
    { day: t('hours.thursday'), time: t('hours.regular') },
    { day: t('hours.friday'), time: t('hours.regular') },
    { day: t('hours.saturday'), time: t('hours.regular') },
    { day: t('hours.sunday'), time: t('hours.closed') },
  ];

  const faqs = t('pages.contact.faqs', { returnObjects: true }) as { q: string; a: string }[];

  usePageMeta({
    title: t('pages.contact.metaTitle'),
    description: t('pages.contact.metaDescription'),
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
            <span className="text-primary">{t('pages.contact.heading')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-text-muted"
          >
            {t('pages.contact.subtitle')}
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
              <h2 className="mb-6 text-2xl font-bold text-text">{t('pages.contact.formTitle')}</h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-text-muted">{t('pages.contact.name')}</label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t('pages.contact.namePlaceholder')}
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-text-muted">{t('pages.contact.email')}</label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t('pages.contact.emailPlaceholder')}
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-text-muted">{t('pages.contact.phoneLbl')}</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={t('pages.contact.phonePlaceholder')}
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1 block text-sm text-text-muted">{t('pages.contact.service')}</label>
                  <select
                    id="service"
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">{t('pages.contact.selectService')}</option>
                    <option value="detailing">{t('pages.contact.optDetailing')}</option>
                    <option value="wrapping">{t('pages.contact.optWrapping')}</option>
                    <option value="reparatie">{t('pages.contact.optReparatie')}</option>
                    <option value="elektro">{t('pages.contact.optElektro')}</option>
                    <option value="tuning">{t('pages.contact.optTuning')}</option>
                    <option value="mobiel">{t('pages.contact.optMobiel')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-text-muted">{t('pages.contact.message')}</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={t('pages.contact.messagePlaceholder')}
                    className="w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-text placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  {t('pages.contact.send')}
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
                    <p className="font-medium text-text">{t('common.address')}</p>
                    <p className="text-sm text-text-muted">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-card p-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-text">{t('common.phoneWhatsApp')}</p>
                    <p className="text-sm text-text-muted">{WHATSAPP_NUMBER}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-card p-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-text">{t('common.openingHours')}</p>
                    <p className="text-sm text-text-muted">{t('common.thuSat')} / {t('common.otherDays')}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Button variant="whatsapp" size="lg" href={whatsappUrl} className="w-full">
                <MessageCircle className="h-5 w-5" />
                {t('common.whatsappDirect')}
              </Button>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.5!2d4.47!3d52.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAzJzM2LjAiTiA0wrAyOCcxMi4wIkU!5e0!3m2!1snl!2snl!4v1"
                  className="h-64 w-full border-0 grayscale invert-[0.9]"
                  allowFullScreen
                  loading="lazy"
                  title={t('common.mapTitle')}
                />
              </div>

              {/* Hours table */}
              <div className="rounded-2xl border border-border bg-surface-card p-4">
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
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-light py-16 md:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-text sm:text-3xl">
            {t('pages.contact.faqTitle')} <span className="text-primary">{t('pages.contact.faqHighlight')}</span>
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
