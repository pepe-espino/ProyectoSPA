import '../styles/styleHome.css';

export function Home() {
  const section = document.createElement('section');
  section.classList.add('home');

  section.innerHTML = `
    <div class="hero">
      <h1>🍽️ Bienvenido a Foodie SPA</h1>
      <p>Descubre platos únicos, sabores auténticos y experiencias que te harán viajar.</p>
      <a href="#/dishes" class="btn">Ver Platos Disponibles</a>
    </div>
  `;

  return section;
}
