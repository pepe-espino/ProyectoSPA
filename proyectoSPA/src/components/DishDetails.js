import { supabase } from '../services/supabase.js';
import '../styles/styleDishesList.css'

export async function DishDetail(id) {
  const section = document.createElement('section');
  section.classList.add('dish-detail');
  section.innerHTML = `<p>Cargando detalle...</p>`;

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    if (!data) {
      section.innerHTML = `<p>No se encontró el plato.</p>`;
      return section;
    }

    section.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.image}" alt="${data.name}" />
      <p><strong>Origen:</strong> ${data.origin}</p>
      <p><strong>Descripción:</strong> ${data.description}</p>
      <p><strong>Rating:</strong> ${'<i class="bi bi-star-fill"></i>'.repeat(data.rating)+'<i class="bi bi-star"></i>'.repeat(5-data.rating)}</p>
      <a href="#/dishes" class="btn-back"><i class="bi bi-arrow-left-circle"></i> Volver a la lista</a>
    `;
  } catch (err) {
    console.error('Error al cargar detalle:', err.message);
    section.innerHTML = `<p>Error al cargar el detalle del plato.</p>`;
  }

  return section;
}
