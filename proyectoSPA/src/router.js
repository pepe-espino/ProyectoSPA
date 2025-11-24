import { Home } from './views/Home';

export function router() {

    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';

    const routes = {
        '/': Home,
    };

    const screen = routes[route];
    view.innerHTML = screen();
}