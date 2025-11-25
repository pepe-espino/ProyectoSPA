import { Navbar } from "./Navbar.js";

export function Header(){
    return `
        <header>
            <h1>Descubre tus platos favoritos</h1>
            ${Navbar()} 
        </header>
    `;
}