import i18next from "i18next";
import { getProductById, deleteById } from '../services/products.js';
import '../styles/styleDishesDetails.css'

export async function DishDetail(id) {
  const section = document.createElement('section');
  section.classList.add('dish-detail');

  try {
    const product = await getProductById(id);

    if (!product) {
      section.innerHTML = `<p>${i18next.t("detail.notFound")}</p>`;
      return section;
    }

    async function handleDelete() {
      const ok = await deleteById(id);
      if (ok) {
        alert(i18next.t("detail.deleted"));
        window.location.hash = '#/dishes';
      } else {
        alert(i18next.t("detail.deleteError"));
      }
    }

    section.innerHTML = `
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}" />
      <div class="data">
        <p><strong>${i18next.t("detail.origin")}:</strong> ${product.origin}</p>
        <p><strong>${i18next.t("detail.description")}:</strong> ${product.description}</p>
        <p><strong>${i18next.t("detail.rating")}:</strong> ${'<i class="bi bi-star-fill"></i>'.repeat(product.rating)+'<i class="bi bi-star"></i>'.repeat(5-product.rating)}</p>
        <div class="buttons">
          <a href="#/dishes" class="btn-back"><i class="bi bi-arrow-left-circle"></i> ${i18next.t("detail.back")}</a>
          <button class="btn-delete"><i class="bi bi-trash-fill"></i> ${i18next.t("detail.delete")}</button>
        </div>
      </div>
    `;

    section.querySelector('.btn-delete').addEventListener('click', handleDelete);

  } catch (err) {
    console.error('Error al cargar detalle:', err.message);
    section.innerHTML = `<p>${i18next.t("detail.error")}</p>`;
  }

  return section;
}
