import i18next from "i18next";
import { LanguageSelector} from "./LanguajeSelector";

export function Navbar() {
    return `
        <nav>
            <a href="#/">${i18next.t("nav.home")}</a>
            <a href="#/about">${i18next.t("nav.about")}</a>
            <a href="#/dishes">${i18next.t("nav.dishes")}</a>
            ${LanguageSelector()}
        </nav>
    `;
}
