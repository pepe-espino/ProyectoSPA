import i18next from "i18next";
import { addFavorite, removeFavorite, isFavorite } from '../services/favorites.js';
import '../styles/styleCard.css';

export function DishCard({id, name, image, origin, rating}) {
  const article = document.createElement('article');
  article.classList.add('card');

  const stars = '<i class="bi bi-star-fill"></i>'.repeat(rating)+'<i class="bi bi-star"></i>'.repeat(5-rating);

  const heartIcon = isFavorite(id) 
    ? '<i class="bi bi-heart-fill"></i>' 
    : '<i class="bi bi-heart"></i>';

  article.innerHTML = `
    <img src="${image}" alt="${name}" />
    <div class="card-content">
      <h3>${name} ${heartIcon}</h3>
      <p>${origin} · ${stars}</p>
      <a href="#/dish/${id}">${i18next.t("card.details")}</a>
    </div>
  `;

  const heartEl = article.querySelector('.bi-heart, .bi-heart-fill');
  heartEl.style.cursor = 'pointer';
  heartEl.addEventListener('click', () => {
    if (isFavorite(id)) {
      removeFavorite(id);
      heartEl.className = 'bi bi-heart'; 
    } else {
      addFavorite(id);
      heartEl.className = 'bi bi-heart-fill';
    }
  });

  return article;
}
