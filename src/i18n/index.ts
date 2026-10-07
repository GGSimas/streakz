import { getLocales } from "expo-localization";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import ptBR from "./locales/pt-BR.json";

export const defaultLanguage = "pt-BR";

export const supportedLanguages = ["pt-BR", "en", "es"] as const;

export type AppLanguage = (typeof supportedLanguages)[number];

const resources = {
  "pt-BR": { translation: ptBR },
  en: { translation: en },
  es: { translation: es },
} as const;

export function resolveLanguage(
  languageTag?: string | null,
  languageCode?: string | null,
): AppLanguage {
  const tag = languageTag?.toLowerCase() ?? "";
  const code = (languageCode ?? tag.split("-")[0] ?? "").toLowerCase();

  if (code === "pt") {
    return "pt-BR";
  }

  if (code === "es") {
    return "es";
  }

  if (code === "en") {
    return "en";
  }

  return defaultLanguage;
}

const deviceLocale = getLocales()[0];

// eslint-disable-next-line import/no-named-as-default-member
void i18next.use(initReactI18next).init({
  resources,
  lng: resolveLanguage(deviceLocale?.languageTag, deviceLocale?.languageCode),
  fallbackLng: defaultLanguage,
  supportedLngs: [...supportedLanguages],
  interpolation: {
    escapeValue: false,
  },
});

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof ptBR;
    };
  }
}

export { useAppTranslation } from "./useAppTranslation";

export default i18next;
