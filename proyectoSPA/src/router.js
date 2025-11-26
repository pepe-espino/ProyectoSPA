import { Home } from './views/Home';
import { About } from './views/About';
import { DishesList } from './components/DishesList';
import { DishDetail } from './components/DishDetails';
import { NotFound } from './views/NotFound';

export function router() {
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';
    
    view.innerHTML = '';

    if (route.startsWith('/dish/')) {
        const id = route.split('/')[2];
        DishDetail(id)
        .then(details => {
            view.innerHTML = '';
            view.appendChild(details);
        });
        return;
    }

    const routes = {
        '/': Home,
        '/about': About,
        '/dishes': DishesList
    };

    const screen = routes[route] || NotFound;
    view.appendChild(screen());
}