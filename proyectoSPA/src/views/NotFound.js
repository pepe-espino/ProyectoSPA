import '../styles/styleNotFound.css'

export function NotFound() {
  const section = document.createElement('section');
  section.classList.add('not-found');
  section.innerHTML = `<h1>404</h1><p>Página no encontrada</p>`;
  return section;
}