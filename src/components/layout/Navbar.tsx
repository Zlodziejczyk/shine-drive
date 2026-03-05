import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn, getWhatsAppUrl } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { DiamondIcon } from '@/components/ui/DiamondIcon';

const navLinks = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.services', href: '/diensten' },
  { key: 'nav.packages', href: '/pakketten' },
  { key: 'nav.portfolio', href: '/portfolio' },
  { key: 'nav.about', href: '/over-ons' },
  { key: 'nav.contact', href: '/contact' },
];

export function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-surface/80 backdrop-blur-md border-b border-border shadow-lg shadow-black/10'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <DiamondIcon className="h-7 w-7" />
            <span>
              <span className="text-white">SHINE</span>
              <span className="text-accent"> & </span>
              <span className="text-primary">DRIVE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-text-muted hover:text-text',
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Language Switcher */}
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Button variant="primary" size="sm" href={whatsappUrl}>
              {t('common.appointment')}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-text md:hidden cursor-pointer"
            aria-label={t('common.toggleMenu')}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      'text-2xl font-semibold transition-colors',
                      location.pathname === link.href
                        ? 'text-primary'
                        : 'text-text hover:text-primary',
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button variant="primary" size="lg" href={whatsappUrl}>
                  {t('common.makeAppointment')}
                </Button>
              </motion.div>
              <LanguageSwitcher className="mb-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
