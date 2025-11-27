import '../styles/styleAbout.css';

export function About() {
  const section = document.createElement('section');
  section.classList.add('about');

  section.innerHTML = `
    <div class="about-card">
      <h2>Sobre la página</h2>
      <p>Esta aplicación está pensada como una SPA (Single Page Application) 
         para gestionar y explorar platos de comida.</p>
      <p>Incluye funcionalidades como listado de platos, detalle individual, 
         valoración con estrellas y gestión de datos mediante Supabase.</p>
      <p>El objetivo es ofrecer una experiencia sencilla, visual y práctica 
         para aprender y demostrar buenas prácticas de desarrollo web.</p>
    </div>
  `;

  return section;
}
