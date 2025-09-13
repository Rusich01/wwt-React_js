import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import LOCALS from "./i18n/constants";
const resources = {
  [LOCALS.EN]: {
    translation: {
      header_h1: "WinWinTravel frontend test task",
      open_modal: " modal window",
      filter: "Filter",
      Loading: "Loading",
      Meal_options: "Meal options",
      Rules: "Rules, Policies, and Payment",
      Facilities: "Facilities",
      Bed_type: "Bed type",
      Health: "Health, Entertainment, and Sports",
    },
  },

  [LOCALS.UK]: {
    translation: {
      header_h1: "Тестовий запуск інтерфейсу WinWinTravel",
      open_modal: "модальне вікно",
      filter: "Фільтр",
      Loading: "Завантаження",
      Meal_options: "Варіанти страв",
      Rules: "Правила, політика та оплата",
      Facilities: "Зручності",
      Bed_type: "Тип ліжка",
      Health: "Здоров'я, розваги та спорт",
    },
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
