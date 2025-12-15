import i18next from "i18next";
import Backend from "i18next-http-backend";

export const initI18n = async () => {
  const saved = localStorage.getItem("lang") || "es";

  await i18next
    .use(Backend)
    .init({
      lng: saved,
      fallbackLng: "en",
      supportedLngs: ["en", "es", "fr", "de", "it", "pt", "ar"],
      backend: {
        loadPath: "/locales/{{lng}}/common.json"
      }
    });

  return i18next;
};
