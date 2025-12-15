import i18next from "i18next";

export function LanguageSelector() {
  const current = i18next.language;

  return `
    <select id="lang-selector">
      <option value="es" ${current === "es" ? "selected" : ""}>ES</option>
      <option value="en" ${current === "en" ? "selected" : ""}>EN</option>
      <option value="fr" ${current === "fr" ? "selected" : ""}>FR</option>
      <option value="de" ${current === "de" ? "selected" : ""}>DE</option>
      <option value="it" ${current === "it" ? "selected" : ""}>IT</option>
      <option value="pt" ${current === "pt" ? "selected" : ""}>PT</option>
    </select>
  `;
}
