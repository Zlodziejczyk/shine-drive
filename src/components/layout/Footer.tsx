import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { getWhatsAppUrl, INSTAGRAM_URL, ADDRESS, WHATSAPP_NUMBER } from '@/lib/utils';
import { DiamondIcon } from '@/components/ui/DiamondIcon';

const quickLinks = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.services', href: '/diensten' },
  { key: 'nav.packages', href: '/pakketten' },
  { key: 'nav.portfolio', href: '/portfolio' },
  { key: 'nav.about', href: '/over-ons' },
  { key: 'nav.contact', href: '/contact' },
];

export function Footer() {
  const { t } = useTranslation();
  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1 - Logo + About */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <DiamondIcon className="h-7 w-7" />
              <span className="text-white">SHINE</span>
              <span className="text-accent"> & </span>
              <span className="text-primary">DRIVE</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-text-muted">
              {t('footer.about')}
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-card text-text-muted transition-all hover:border-primary hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-card text-text-muted transition-all hover:border-whatsapp hover:text-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              {t('common.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-text-muted">{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="text-sm text-text-muted hover:text-text">
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm text-text-muted">
                  <p>{t('common.thuSat')}</p>
                  <p>{t('common.otherDays')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-text-dim sm:flex-row">
          <p>{t('common.allRightsReserved')}</p>
          <p>
            {t('common.websiteBy')}{' '}
            <a
              href="https://polaris360.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Polaris360
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
