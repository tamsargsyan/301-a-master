import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
// import enTranslation from './locales/en.json'; // Sample translation file
// import frTranslation from './locales/fr.json'; // Sample translation file

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru', // Default language
    fallbackLng: 'ru', // Fallback language in case translation is missing
    debug: true, // Enable debug mode for development

    // Add your resources (translation files) here
    resources: {
      en: {
        // translation: enTranslation, // English translations
      },
      ru: {
        // translation: frTranslation, // French translations
      },
      am: {
        // translation: frTranslation, // French translations
      },
      // Add more language resources as needed
    },

    // You can add more i18n options here
  });

export default i18n;
