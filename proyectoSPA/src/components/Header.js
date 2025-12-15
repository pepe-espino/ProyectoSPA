import i18next from "i18next";
import { Navbar } from "./Navbar.js";
import { LanguageSelector } from "./LanguageSelector.js";

export function Header(){
    return `
        <header>
            <h1>${i18next.t("header.title")}</h1>
            ${Navbar()}
            ${LanguageSelector()}
        </header>
    `;
}
