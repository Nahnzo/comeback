import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({ fallbackLng: 'ru', debug: __IS__DEV, interpolation: { escapeValue: false } });

export default i18next;
