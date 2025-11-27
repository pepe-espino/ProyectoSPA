import { DishCard } from "./DishCard";
import { getProducts } from "../services/products";
import { getFavorites } from "../services/favorites"; // funciones de localStorage
import '../styles/styleCard.css';

export function DishesList() {
  const section = document.createElement('section');
  section.classList.add('dishesList');

  section.innerHTML = `
    <div class="title">
    <h2>Platos disponibles</h2>
    <button class="btn-filter"><i class="bi bi-heart-fill"></i> Mostrar favoritos</button>
    </div>
    <div class="dishes-container"></div>
  `;

  const listContainer = section.querySelector('.dishes-container');
  const filterBtn = section.querySelector('.btn-filter');

  let showFavorites = false;

  function render(products) {
    listContainer.innerHTML = '';
    if (!products || products.length === 0) {
      listContainer.innerHTML = `<p>No hay productos disponibles.</p>`;
      return;
    }
    products.forEach(product => {
      const card = DishCard(product);
      listContainer.appendChild(card);
    });
  }

  getProducts()
    .then(products => {
      render(products);

      filterBtn.addEventListener('click', () => {
        showFavorites = !showFavorites;
        if (showFavorites) {
          const favs = getFavorites(); 
          const favProducts = products.filter(p => favs.includes(p.id));
          render(favProducts);
          filterBtn.innerHTML = '<i class="bi bi-heart-fill"></i> Mostrar todos';
        } else {
          render(products);
          filterBtn.innerHTML = '<i class="bi bi-heart-fill"></i> Mostrar favoritos';
        }
      });
    })
    .catch(error => {
      console.error('Error al acceder a los productos:', error);
      listContainer.innerHTML = `<p>Error al acceder a los productos.</p>`;
    });

  return section;
}
