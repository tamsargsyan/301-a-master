
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./locales/en.json";
import am from "./locales/am.json";
import ru from "./locales/ru.json";

const resources = {
  en: {
    translation: en,
  },
  am: {
    translation: am,
  },
  ru: {
    translation: ru
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: "ru",
    resources,
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });

  export default i18n;
