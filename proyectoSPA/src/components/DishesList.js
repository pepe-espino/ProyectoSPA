import i18next from "i18next";
import { DishCard } from "./DishCard";
import { getProducts } from "../services/products";
import { getFavorites } from "../services/favorites";
import '../styles/styleCard.css';

export function DishesList() {
  const section = document.createElement('section');
  section.classList.add('dishesList');

  section.innerHTML = `
    <div class="title">
      <h2>${i18next.t("dishes.title")}</h2>
      <button class="btn-filter"><i class="bi bi-heart-fill"></i> ${i18next.t("dishes.showFavorites")}</button>
    </div>
    <div class="dishes-container"></div>
  `;

  const listContainer = section.querySelector('.dishes-container');
  const filterBtn = section.querySelector('.btn-filter');

  let showFavorites = false;

  function render(products) {
    listContainer.innerHTML = '';
    if (!products || products.length === 0) {
      listContainer.innerHTML = `<p>${i18next.t("dishes.noProducts")}</p>`;
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
          filterBtn.innerHTML = `<i class="bi bi-heart-fill"></i> ${i18next.t("dishes.showAll")}`;
        } else {
          render(products);
          filterBtn.innerHTML = `<i class="bi bi-heart-fill"></i> ${i18next.t("dishes.showFavorites")}`;
        }
      });
    })
    .catch(error => {
      console.error('Error al acceder a los productos:', error);
      listContainer.innerHTML = `<p>${i18next.t("dishes.errorLoading")}</p>`;
    });

  return section;
}
