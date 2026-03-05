import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import nl from './locales/nl.json';
import pl from './locales/pl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      nl: { translation: nl },
      pl: { translation: pl },
    },
    fallbackLng: 'nl',
    supportedLngs: ['nl', 'pl'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Sync <html lang=""> with current language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
