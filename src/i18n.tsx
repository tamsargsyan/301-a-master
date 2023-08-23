import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {}, // Leave this empty since translations come from API
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
