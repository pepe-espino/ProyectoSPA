import {Header} from './components/Header.js';
import { Footer } from './components/Footer.js';
import './styles/style.css';
import { router } from './router.js';

document.querySelector('#app').innerHTML = `
    ${Header()}
    <main id="view"></main>
    ${Footer()}
`;

router();
window.addEventListener('hashchange', router);