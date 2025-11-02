import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { en } from '../i18n/en';
import { he } from '../i18n/he';

export type Locale = 'en' | 'he';

type Messages = typeof en | typeof he;

type I18nContextValue = {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  messages: Messages;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string, fallback?: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

type I18nProviderProps = {
  children: ReactNode;
  defaultLocale?: Locale;
};

const STORAGE_KEY = 'locale';

export function I18nProvider({ children, defaultLocale = 'he' }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return defaultLocale;
    console.log(defaultLocale)
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === 'en' || stored === 'he') return stored;
    return defaultLocale;
  });

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const toggleLocale = () => setLocale(locale === 'en' ? 'he' : 'en');

  const messages: Messages = locale === 'he' ? he : en;
  const dir: 'ltr' | 'rtl' = locale === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dir;
  }, [locale, dir]);

  const t = (path: string, fallback = path) => {
    const parts = path.split('.');
    let cur: any = messages;
    for (const part of parts) {
      cur = cur?.[part];
      if (cur === undefined || cur === null) return fallback;
    }
    return typeof cur === 'string' ? cur : fallback;
  };

  const value = useMemo<I18nContextValue>(() => ({ locale, dir, messages, setLocale, toggleLocale, t }), [locale, dir, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
}


