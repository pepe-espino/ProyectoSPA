import i18next from "i18next";
import '../styles/styleAbout.css';

export function About() {
  const section = document.createElement('section');
  section.classList.add('about');

  section.innerHTML = `
    <div class="about-card">
      <h2>${i18next.t("about.title")}</h2>
      <p>${i18next.t("about.p1")}</p>
      <p>${i18next.t("about.p2")}</p>
      <p>${i18next.t("about.p3")}</p>
    </div>
  `;

  return section;
}
