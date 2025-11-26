import { getProductById } from '../services/products.js';
import '../styles/styleDishesDetails.css'

export async function DishDetail(id) {
  const section = document.createElement('section');
  section.classList.add('dish-detail');

  try {
    const product = await getProductById(id);

    if (!product) {
      section.innerHTML = `<p>No se encontró el plato.</p>`;
      return section;
    }

    section.innerHTML = `
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}" />
      <div>
      <p><strong>Origen:</strong> ${product.origin}</p>
      <p><strong>Descripción:</strong> ${product.description}</p>
      <p><strong>Rating:</strong> ${'<i class="bi bi-star-fill"></i>'.repeat(product.rating)+'<i class="bi bi-star"></i>'.repeat(5-product.rating)}</p>
      <a href="#/dishes" class="btn-back"><i class="bi bi-arrow-left-circle"></i> Volver a la lista</a>
      </div>
    `;
  } catch (err) {
    console.error('Error al cargar detalle:', err.message);
    section.innerHTML = `<p>Error al cargar el detalle del plato.</p>`;
  }

  return section;
}
