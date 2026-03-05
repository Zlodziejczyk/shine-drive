import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '@/lib/utils';

export function WhatsAppButton() {
  const { t } = useTranslation();
  const whatsappUrl = getWhatsAppUrl(t('common.whatsappDefault'));

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-shadow hover:shadow-whatsapp/50"
      aria-label={t('common.chatWhatsApp')}
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-20" />
      <MessageCircle className="h-7 w-7 relative z-10" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-surface-card px-3 py-1.5 text-sm font-medium text-text opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {t('common.chatWithUs')}
      </span>
    </motion.a>
  );
}
