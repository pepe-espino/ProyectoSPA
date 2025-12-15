import i18next from "i18next";
import '../styles/styleHome.css';

export function Home() {
  const section = document.createElement('section');
  section.classList.add('home');

  section.innerHTML = `
    <div class="container">
      <h1>🍽️ ${i18next.t("home.title")}</h1>
      <p>${i18next.t("home.subtitle")}</p>
      <a href="#/dishes" class="btn">${i18next.t("home.button")}</a>
    </div>
  `;

  return section;
}
