import i18next from "i18next";
import '../styles/styleNotFound.css'

export function NotFound() {
  const section = document.createElement('section');
  section.classList.add('not-found');
  section.innerHTML = `<h1>404</h1><p>${i18next.t("notfound.text")}</p>`;
  return section;
}
