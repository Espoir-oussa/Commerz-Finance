// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importation des fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationNL from './locales/nl/translation.json';
import translationFI from './locales/fi/translation.json';
import translationHR from './locales/hr/translation.json';

// Définition des ressources (chaque langue avec son contenu)
const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  nl: { translation: translationNL },
  fi: { translation: translationFI },
  hr: { translation: translationHR },
};

// Initialisation de i18next
i18n
  .use(LanguageDetector) // détecte automatiquement la langue du navigateur
  .use(initReactI18next) // connecte i18next à React
  .init({
    resources,
    fallbackLng: 'en', // langue par défaut si aucune n'est trouvée
    interpolation: {
      escapeValue: false, // pas besoin d’échapper les valeurs avec React
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
