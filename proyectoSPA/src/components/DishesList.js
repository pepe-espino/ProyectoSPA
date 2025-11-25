import { DishCard } from "./DishCard";
import { getProducts } from "../services/products";

export function DishesList() {
  const section = document.createElement('section');
  section.innerHTML = `<h2>Platos disponibles</h2>`;
  section.classList.add('dishesList');

  getProducts()
    .then(products => {
      console.log('Productos recibidos:', products);

      if (!products || products.length === 0) {
        section.innerHTML += `<p>No hay productos disponibles.</p>`;
        return;
      }

      products.forEach(product => {
        const card = DishCard(product);
        console.log('Insertando card:', card);
        section.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error al acceder a los productos:', error);
      section.innerHTML += `<p>Error al acceder a los productos.</p>`;
    });

  return section;
}
