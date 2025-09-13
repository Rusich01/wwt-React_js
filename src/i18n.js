import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import UK from "./i18n/Language/uk";
import EN from "./i18n/Language/en";

import LOCALS from "./i18n/constants";
const resources = {
  [LOCALS.EN]: {
    translation: EN,
  },

  [LOCALS.UK]: {
    translation: UK,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next\
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.UK,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
