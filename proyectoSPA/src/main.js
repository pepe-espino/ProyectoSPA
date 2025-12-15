import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import './styles/style.css';
import { router } from './router.js';
import { initI18n } from './i18n.js';
import i18next from "i18next"; 

function rerenderApp() {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    <main id="view"></main>
    ${Footer()}
  `;
  router();
}

initI18n().then(() => {
    rerenderApp();

    window.addEventListener('hashchange', router);

    document.addEventListener("change", (e) => {
        if (e.target.id === "lang-selector") {
            const lang = e.target.value;
            localStorage.setItem("lang", lang);
            i18next.changeLanguage(lang).then(() => {
                rerenderApp();
            });
        }
    });
});
