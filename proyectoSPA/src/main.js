import './styles/style.css';
import {Navbar} from './components/Navbar';
import {router} from './router';

document.querySelector('#app').innerHTML = `
    ${Navbar()}
    <main id="view"></main>
`

router();
window.addEventListener('hashchange', router);