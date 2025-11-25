import '../styles/styleCard.css';

export function DishCard({id, name, image, origin, rating}) {
  const article = document.createElement('article');
  article.classList.add('card');

  const stars = '<i class="bi bi-star-fill"></i>'.repeat(rating);
  const startLeft = '<i class="bi bi-star"></i>'.repeat(5-rating);

  article.innerHTML = `
    <img src="${image}" alt="${name}" />
    <div class="card-content">
      <h3>${name}</h3>
      <p>${origin} · ${stars+startLeft}</p>
      <a href="#/dish/${id}">Ver detalle</a>
    </div>
  `;
  return article;
}