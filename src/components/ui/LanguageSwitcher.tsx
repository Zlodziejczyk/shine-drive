import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'nl', flag: '🇳🇱', label: 'NL' },
  { code: 'pl', flag: '🇵🇱', label: 'PL' },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation();

  return (
    <div
      className={cn(
        'flex items-center gap-0.5 rounded-full border border-border bg-surface-light p-0.5',
        className,
      )}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={cn(
            'flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200',
            i18n.resolvedLanguage === lang.code
              ? 'bg-primary text-white shadow-sm'
              : 'text-text-muted hover:text-text',
          )}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="text-sm leading-none">{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
